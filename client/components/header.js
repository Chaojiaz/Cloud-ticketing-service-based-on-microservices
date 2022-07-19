import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { lable: 'Sign Up', href: '/auth/signup' },
    !currentUser && { lable: 'Sign In', href: '/auth/signin' },
    currentUser && { lable: 'Sign Out', href: '/auth/signout' }
  ]   //this will filter out any entried in there are false.
    .filter(linkConfigure => linkConfigure)
    .map(({ lable, href }) => {
      return  <li key={href} className="nav-item">
        <Link href={href}>
          <a className="nav-link">{lable}</a> 
        </Link>
      </li>
    });

  return <nav className="navbar navbar-light bg-light">
    <Link href="/">
      <a className="navbar-brand">GitTix</a>

    </Link>
    <div className="d-flex justify-content-end">
      <ul className="nav d-flex align-items-center">
        {links}
      </ul>
    </div>
  </nav>
};