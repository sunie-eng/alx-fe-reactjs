import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
