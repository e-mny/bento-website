import { BaseBlock } from "./block";

/* TODO
- Create Memeoji which follows the user's cursors
- One-liner introduction
- Clickable logos for Linkedin, GitHub, Resume page
*/

export class AvatarBlock extends BaseBlock {
  render() {
    return (
      <BaseBlock
        title="Avatar"
        content={
          <>
            <p>Here's your Avatar</p>
            <p>12,584 steps taken.</p>
          </>
        }
        footer={
          <>
            <p>You need 12,584 more steps to reach your goal.</p>
          </>
        }
        // additionalClasses="lg:max-w-md"
      />
    );
  }
}