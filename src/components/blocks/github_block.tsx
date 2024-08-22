import { BaseBlock } from "./block";

/* TODO
- Retrieve GitHub stats
- Number of repositories
- Lines of code written
- Most commonly used library
- Project with most number of commits
*/

export class GitHubBlock extends BaseBlock {
  render() {
    return (
      <BaseBlock
        title="GitHub"
        content={
          <>
            <p>Here's your GitHub</p>
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