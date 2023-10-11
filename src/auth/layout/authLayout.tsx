
import '../Auth.css';
interface DefaultLayoutProps {
    children: React.ReactNode;
}

export const AuthLayout = ({ children }:DefaultLayoutProps) => {
    return (
<div className="auth-block">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                {children}
            </div>
        </div>
    </div>
</div>
    );
  }