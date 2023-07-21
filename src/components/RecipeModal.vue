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
          label="Name:"
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
          label="Image Link:"
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


        <b-form-group label="Time to make(minutes):" label-for="ttm-input">
          <b-form-select
            id="ttm-input"
            v-model="timeToMake"
            :options="ttmOptions"
            :state="ttmState"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Servings:" label-for="servings-input">
          <b-form-select
            id="servings-input"
            v-model="servings"
            :options="servingsOptions"
            :state="servingState"
            required
          ></b-form-select>
        </b-form-group>
        
        <div class="checkbox-row">
          <b-form-group label="" label-for="is-vegan-input">
            <b-form-checkbox id="is-vegan-input" v-model="isVegan" :state="isVeganState">
              Vegan |
            </b-form-checkbox>
          </b-form-group>
          <b-form-group label="" label-for="is-vegetarian-input">
            <b-form-checkbox id="is-vegetarian-input" v-model="isVegetarian" :state="isVegetarianState">
              Vegetarian |
            </b-form-checkbox>
          </b-form-group>
          <b-form-group label="" label-for="is-gluten-free-input">
            <b-form-checkbox id="is-gluten-free-input" v-model="isGlutenFree" :state="isGlutenFreeState">
              Gluten Free
            </b-form-checkbox>
          </b-form-group>
        </div>
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
    data() {
        return {
        name: '',
        nameState: null,
        image: '',
        imageState: null,
        title: "",
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
        servings: 1,
        servingsOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        servingState: null,
        timeToMake: 10,
        ttmOptions: [10, 15, 30, 45, 60, 90, 120, 150, 180, 210],
        ttmState: null,
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
      this.servings=1;
      this.timeToMake = 10;
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
      readyInMinutes: this.timeToMake,
      image: this.image,
      popularity: 0, // You may need to update this value based on your requirements
      vegan: this.isVegan,
      vegetarian: this.isVegetarian,
      glutenFree: this.isGlutenFree,
      instruction: this.instructions.map((instruction) => instruction.instruction),
      ingredients: this.ingredients.map((ingredient) => ingredient.ingredient),
      servings: this.servings, // You may need to update this value based on your requirements
    };
    console.log(data);
    try {
      // Send the data to the server using an HTTP POST request
      const response = await this.axios.post(this.$root.store.server_domain + '/users/recipes_created', data);

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
  .checkbox-row {
  display: flex;
  align-items: center;
  gap: 10px; /* Adjust the gap between checkboxes as desired */
}

/* Remove label styles for checkboxes */
.checkbox-row .b-form-group .b-form-checkbox-label {
  display: none;
}

/* Adjust the checkbox style (optional) */
.checkbox-row .b-form-checkbox {
  font-size: 18px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  background-color: #f8f9fa;
}

/* Style the checked checkbox */
.checkbox-row .b-form-checkbox:checked {
  background-color: #007bff;
  color: #fff;
}
  </style>
  