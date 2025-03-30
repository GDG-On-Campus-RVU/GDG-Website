npm install react react-dom tailwindcss lucide-react
# For shadcn/ui components, follow their installation guide at https://ui.shadcn.com/docs/installation
And also to use the component, you would import it like this:
import Leaderboard from './path/to/leaderboard';
import './path/to/leaderboard.css';

export default function YourPage() {
  return <Leaderboard />;
}