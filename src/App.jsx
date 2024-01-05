import './App.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

function App() {
  return (
    <div className="app-container">
      <Card className="w-96 card-container">
        <CardHeader floated={false} className="h-80">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7XKFqR0kcVlxIm8sYP3QWIj1wfvqIYvShI-eatc7m_nd7Aq2NP0TmZzxUzRe9cdDP9U&usqp=CAU" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            A girl
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            some picture
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
