import React from 'react';

const Navbar =()=>{
    return(
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

  <a class="navbar-brand" href="#">Logo</a>
  

  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/login">Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
  </ul>
</nav>
        </div>
    )
}

export default Navbar