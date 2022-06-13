import { Component, h,Element , } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  @Element() el: HTMLElement;

  profile:any;
  
  getF() {
    console.log(this.el);
  }

  render() {
    return (
      <div class="app-home">
        <p onClick={this.getF.bind(this)}>
         blog
        </p>
        <app-profile  ref={el=> this.profile = el}  />

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
