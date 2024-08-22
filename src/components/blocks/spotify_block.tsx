import { BaseBlock } from "./block";

/* TODO
- Retrieve Online/Offline status
- Retrieve Now Playing/Last played
- Show top 10 most frequently played songs
*/

export class SpotifyBlock extends BaseBlock {
  render() {
    return (
      <BaseBlock
        title="Spotify"
        content={
          <>
            <p>Here's your spotify</p>
            <p>12,584 steps taken. 12,584 steps taken. 12,584 steps taken. 12,584 steps taken. 12,584 steps taken. 12,584 steps taken. </p>
          </>
        }
        footer={
          <>
            <p>You need 12,584 more steps to reach your goal.</p>
          </>
        }
        additionalClasses="sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 gap-6"
      />
    );
  }
}