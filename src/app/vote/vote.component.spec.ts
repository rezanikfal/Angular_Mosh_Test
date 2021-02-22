import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent

  beforeEach(() => component = new VoteComponent)

  it('should increment total vote when upvothed', () => {
    component.upVote()
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement total vote when downvothed', () => {
    component.downVote()
    expect(component.totalVotes).toBe(-1);
  });
  it('should decrement total vote when downvothed', () => {
    component.downVote()
    expect(component.totalVotes).toBe(-1);
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVote=undefined
    component.voteChange.subscribe(tv => totalVote = tv)
    component.upVote()
    expect(totalVote).toBe(1);
    expect(totalVote).not.toBeNull()
  });
});
