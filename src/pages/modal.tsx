import Button from "@material-ui/core/Button";
import Link from "next/link";
import TaskItem from "../components/TaskItem";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

// import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async context => {
//     // const allCategoriesData = getCategories()
//     return {
//         props: {
//             string: 'test';
//         }
//     }
// }
const Modal: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  return (
    <>
      <h1>successful!</h1>
      <div>
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Get back home
        </Button>
      </Link>
      <style jsx global>{`
        html,
        body {
          color: #c9d1d9;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Modal;
