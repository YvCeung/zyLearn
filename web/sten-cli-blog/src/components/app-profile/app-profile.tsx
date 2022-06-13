import { Component, Prop, h, Method } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    }
    return '';
  }

  @Method()
  foo() {
    console.log("123");
  }

  /* 
    @Required()
    @Input()

    @Output
  */

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p> profile</p>

          <stencil-route-link url="/profile/stencil">
            <button>Profile page</button>
          </stencil-route-link>
        </div>
      );
    }
  }
}
