import Button from "@material-ui/core/Button";
import Link from "next/link";

// import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async context => {
//     // const allCategoriesData = getCategories()
//     return {
//         props: {
//             string: 'test';
//         }
//     }
// }

export const Modal = (): JSX.Element => (
  <>
    <h1>successful!</h1>
    <Link href="/" passHref>
      <Button variant="contained" color="primary">
        Get back home
      </Button>
    </Link>
  </>
);

export default Modal;
