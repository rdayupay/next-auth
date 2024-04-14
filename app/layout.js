import Navigation from './(components)/Navigation';
import './globals.css';

export const metadata = {
  title: 'Next Auth',
  description: 'User authentication and access control with NextAuth.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navigation />
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}
