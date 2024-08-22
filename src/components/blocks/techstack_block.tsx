import { BaseBlock } from "./block";

/* TODO
- Display libraries and languages used (either in Logos or text)
*/

export class TechStackBlock extends BaseBlock {
  render() {
    return (
      <BaseBlock
        title="Tech Stack"
        content={
          <>
            <p>Here's your </p>
            <p>12,584 steps taken.</p>
          </>
        }
        footer={
            <p>You need 12,584 more steps to reach your goal.</p>
        }
        additionalClasses="lg:max-w-md"
      />
    );
  }
}