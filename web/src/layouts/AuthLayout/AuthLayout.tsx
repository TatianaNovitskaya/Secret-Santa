import { Toaster } from "@redwoodjs/web/toast";
import Footer from "src/components/Footer/Footer";

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className="bg-auth">
        <Toaster/>
        <img src="/images/logo__secret-santa.svg" alt="Secret Santa"
             className="mx-auto mb-10 w-[460px] pt-24" />
        <div className={"max-w-[660px] mx-auto"}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
