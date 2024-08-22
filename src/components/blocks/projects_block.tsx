import { BaseBlock } from "./block";

/* TODO
- Show a moving list of projects (which pauses when the user hovers over the tab)
- Create Projects page
- Have a short writeup of every project written in resume
*/

export class ProjectsBlock extends BaseBlock {
  render() {
    return (
      <BaseBlock
        title="Projects"
        content={
          <>
            <p>Here's your Projects</p>
            <p>12,584 steps taken.</p>
            <p>Here's your Projects</p>
            <p>12,584 steps taken.</p>
            <p>Here's your Projects</p>
            <p>12,584 steps taken.</p>
            <p>Here's your Projects</p>
            <p>12,584 steps taken.</p>
            <p>Here's your Projects</p>
            <p>12,584 steps taken.</p>
            <p>Here's your Projects</p>
            <p>12,584 steps taken.</p>
          </>
        }
        footer={
          <>
            <p>You need 12,584 more steps to reach your goal.</p>
          </>
        }
        additionalClasses="md:row-span-2 md:col-span-2 lg:col-span-1 gap-6"
      />
    );
  }
}