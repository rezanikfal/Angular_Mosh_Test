import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  
  totalVotes = 0
  voteChange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  upVote() {
    this.totalVotes++
    this.voteChange.emit(this.totalVotes)
  }

  downVote() {
    this.totalVotes--
  }

}
