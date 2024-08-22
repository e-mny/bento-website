import { BaseBlock } from "./block";

/* TODO
- Show an interactive map of Singapore with my avatar showing the location
*/

export class LocationBlock extends BaseBlock {
  render() {
    return (
      <BaseBlock
        title="Location"
        content={
          <>
            <p>Here's your Location</p>
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