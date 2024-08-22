import { BaseBlock } from "./block";

/* TODO
- Slideshow of photos (which pauses when the user hovers over it)
- Landing page for photos
- Have a timeline of the photos + credits of photographers for each photo (if applicable)
*/

export class PhotosBlock extends BaseBlock {
  render() {
    return (
      <BaseBlock
        title="Photos"
        content={
          <>
            <p>Here's your Photos</p>
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