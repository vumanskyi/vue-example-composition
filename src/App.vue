<template>
  <div class="container">
    <AddRecipe :on-add="addRecipe"/>

    <div class="columns">
      <RecipeList
              :recipes="recipes"
              @select="onSelectRecipes"
      />
      <RecipeDetail
              :recipe="current"
              @remove="onRemoveRecipe"
      />
    </div>
  </div>
</template>

<script>
import AddRecipe from '@/components/AddRecipe'
import RecipeDetail from '@/components/RecipeDetail'
import RecipeList from '@/components/RecipeList'
import {useRecipes} from "@/composition/recipes";

export default {
  name: 'App',
  components: {
    AddRecipe,
    RecipeDetail,
    RecipeList
  },
  setup() {
    return {
      ...useRecipes()
    }
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    color: #222;
  }
  a {
    text-decoration: none;
    color: darkblue;
    transition: .3s all ease;
  }
  .center {
    text-align: center;
  }
  a:hover {
    cursor: pointer;
    opacity: .7;
    text-decoration: underline;
  }
  .container {
    max-width: 1000px;
    margin: 0 auto;
    height: 100vh;
  }
  .columns {
    display: flex;
  }
  .detail, .list {
    width: 50%;
    border: 1px solid #eee;
  }
  .list {
    border-right: 0;
  }
  .btn {
    border-radius: 5px;
    background: darkblue;
    color: #fff;
    padding: 6px 14px;
    cursor: pointer;
  }
  .btn:disabled {
    background-color: #eee;
    color: black;
    cursor: not-allowed;
  }
  .btn.remove {
    background: darkred;
  }
  .btn.secondary{
    background: grey;
  }
</style>
