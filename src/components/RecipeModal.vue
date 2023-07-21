<template>
    <div>
        <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Create a new Recipe"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Image Link"
          label-for="image-input"
          invalid-feedback="Image is required"
          :state="imageState"
        >
          <b-form-input
            id="image-input"
            v-model="image"
            :state="imageState"
            required
          ></b-form-input>
        </b-form-group>
        
      <b-form-group label="Is Vegan?" label-for="is-vegan-input">
        <b-form-checkbox
          id="is-vegan-input"
          v-model="isVegan"
          :state="isVeganState"
        >
          Yes
        </b-form-checkbox>
      </b-form-group>

      <b-form-group label="Is Vegetarian?" label-for="is-vegetarian-input">
        <b-form-checkbox
          id="is-vegetarian-input"
          v-model="isVegetarian"
          :state="isVegetarianState"
        >
          Yes
        </b-form-checkbox>
      </b-form-group>

      <b-form-group label="Is Gluten-Free?" label-for="is-gluten-free-input">
        <b-form-checkbox
          id="is-gluten-free-input"
          v-model="isGlutenFree"
          :state="isGlutenFreeState"
        >
          Yes
        </b-form-checkbox>
      </b-form-group>
      <!-- Ingredients -->
      <h5>Ingredients</h5>
      <div v-for="(ingredient, index) in ingredients" :key="'ingredient-' + index">
        <b-form-group
          :label="'Ingredient ' + (index + 1)"
          :label-for="'ingredient-input-' + index"
          :invalid-feedback="'Ingredient ' + (index + 1) + ' is required'"
          :state="ingredientStates[index]"
        >
          <b-form-input
            :id="'ingredient-input-' + index"
            v-model="ingredient.ingredient"
            :state="ingredientStates[index]"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <b-button @click="addIngredient">Add Ingredient</b-button>

      <!-- Instructions -->
      <h5>Instructions</h5>
      <div v-for="(instruction, index) in instructions" :key="'instruction-' + index">
        <b-form-group
          :label="'Instruction ' + (index + 1)"
          :label-for="'instruction-input-' + index"
          :invalid-feedback="'Instruction ' + (index + 1) + ' is required'"
          :state="instructionStates[index]"
        >
          <b-form-input
            :id="'instruction-input-' + index"
            v-model="instruction.instruction"
            :state="instructionStates[index]"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <b-button @click="addInstruction">Add Instruction</b-button>
      </form>
    </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    name: "RecipeModal",
     components: {
    //
  },
    data() {
        return {
        name: '',
        nameState: null,
        image: '',
        imageState: null,
        title: "",
        readyInMinutes: 0,
        ingredients: [{ ingredient: '' }], // Initialize with an object containing an empty ingredient
        instructions: [{ instruction: '' }], // Initialize instructions with an empty string
        ingredientStates: [], // Array to track the validation state of each ingredient
        instructionStates: [],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: false,
        isGlutenFreeState: false,
        isVeganState: false,
        isVegetarianState: false,
        };
    },
    methods: {
        addIngredient() {
        this.ingredients.push({ ingredient: '' });
        this.ingredientStates.push(null);
        },
        addInstruction() {
      this.instructions.push({ instruction: '' });
      this.instructionStates.push(null);
    },
    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        this.imageState = valid
        return valid
      },
      resetModal() {
      this.name = "";
      this.nameState = null;
      this.image = "";
      this.imageState = null;
      this.ingredients = [{ ingredient: "" }]; // Reset ingredients array to contain one empty row
      this.instructions = [{ instruction: "" }]; // Reset instructions array to contain one empty row
      this.ingredientStates = [];
      this.instructionStates = [];
      this.isVegan = false; // Reset to false when modal is opened
      this.isVegetarian = false; // Reset to false when modal is opened
      this.isGlutenFree = false;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    async handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
          // Prepare the data to send to the server
    const data = {
      title: this.name,
      readyInMinutes: this.readyInMinutes,
      image: this.image,
      popularity: 0, // You may need to update this value based on your requirements
      vegan: this.isVegan,
      vegetarian: this.isVegetarian,
      glutenFree: this.isGlutenFree,
      instruction: this.instructions.map((instruction) => instruction.instruction),
      ingredients: this.ingredients.map((ingredient) => ingredient.ingredient),
      servings: 0, // You may need to update this value based on your requirements
    };
    console.log(data);
    try {
      // Send the data to the server using an HTTP POST request
      const response = await this.axios.post(this.$root.store.server_domain + '/user/recipes_created', data);

      // Handle the response from the server (if needed)
      console.log(response.data); // For example, you can log the response message

      // Reset the form and hide the modal
      this.resetModal();
    } catch (error) {
      // Handle any errors that occurred during the HTTP request
      console.error('Error submitting the form:', error);
    }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },



    },
};
  </script>
  
  <style scoped>
  </style>
  