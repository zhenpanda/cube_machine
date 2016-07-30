// es2015 js notes

function getUsersAvatars(userNames, cb){
  let url = "/userAvatars/";
  
  for(let index in userNames){
    _fetchAvatar(url + userNames[index], function(avatarUrl){
      _displayAvatar(userNames[index], avatarUrl);
    });
  }
}


// default parames
// named parames


// destrucuring
let users =["sam","tyler","brook"];
let [a,b,c] = users;
let [first, ...rest] = users;

function buildTopicInfo(topic){
  let title = `<h1>${topic.title}</h1>`;
  let author = `<small>${topic.author}<small>`;

  return [title, author];
}

let topic = getCurrentTopic();
let [topicTitle, topicAuthor] = buildTopicInfo(topic);

let topicId = currentTopic();
let activeUsers = ["Sam", "Tyler", "Brook"];

for( let t of activeUsers ){
  notifyTopicReply(topicId,  t);
}

let recentTopics = [
  { 
    title: "Semi-colons: Good or Bad?",
    isLocked: true 
  },
  { 
    title: "New JavaScript Framework Released", 
    isLocked: true 
  },
  { 
    title: "ES2015 - The Shape of JavaScript to Come", 
    isLocked: false 
  }
];

recentTopics.find(topic -> !topic.isLocked);

// map data type
/*
The Map object is a simple key/value data structure. We use the set method to add entries, and the get method to read entries.
*/
let t = new Map();
t.set(u, 5);
t.get(u);

// use set to set it
// use get() to asses

let author1 = { name: "Sam" };
let author2 = { name: "Tyler" };

let totalReplies = new Map();
totalReplies.set(author1, 42);
totalReplies.set(author2, 15);

console.log( `Total Replies: ${totalReplies.get(author1)}` );
console.log( `Total Replies: ${totalReplies.get(author2)}` );


// weak map, obj only map, good for memory

let u = {};
let mapS = new WeakMap();

// get has delete

let recentPosts = new Map();

recentPosts.set( "Sam", "ES2015" );
recentPosts.set( "Tyler", "CoffeeScript" );
recentPosts.set( "Brook",  "TypeScript" );

for( let [user,postTitle] of recentPosts ){
  console.log(`${user} = ${postTitle}`);
}

// Sets

let tages = new Set();
tags.add("web");

// no duplicate in set

let tags = new Set();

tags.add("JavaScript");
tags.add("Programming");
tags.add("Web");

let [first, ...rest] = tags;

console.log( `First tag: ${first}` );

let weakTags = new WeakSet();
weakTags.has();
weakTags.delete();

// weakSet has no for of
// weakSet stores only objs

// Classes OOP

class Widget {
	constructor(name, desc, url) {
		this.name = name;
		this.desc = desc;
		this.url = url;
	}
	render() {
		let link = this._buildlink(this.url);
	}
	//privite func
	_buildlink() {

	}

};

class SWidegt extends Widget {
	constructor() {
		//inherit parent
		super();
	}
}

// class example

class TopicReplyCounter {

  constructor(topicId, replies){
    this.topicId = topicId;
    this.replies = replies || [];
    this.replyCount = this.replies.length;
  }
  
  addReply(reply){
    this.replies.push(reply);
    this.replyCount = this.totalReplies().length;
  }
  
  totalReplies(){
    return this.replies.filter( reply => !reply.isAbuse );
  }
  
  totalCount(){
    return this.replyCount;
  }
}

// more example

class TagManager {
  constructor (topicId) {
    this.topicId = topicId;
  }
  addTag(tagName) {
    API.createTag(tagName, this.topicId);
  }
  removeTag(tagName) {
    API.deleteTag(tagName, this.topicId);
  }
}

class SidebarAdvertisement extends Advertisement {
  constructor(title, link) {
    super(title, link);
  }
  _linkText() {
    return "Sign up now!";
  }
}

// modules

export default function isTopicValid(topic){
  const MAX_TITLE_LENGTH = 20;

  let isValid = !(topic.title.length > MAX_TITLE_LENGTH || topic.author.isBlocked);
  return isValid;
}

export { alertMsg };

function isTopicValid(topic){
  const MAX_TITLE_LENGTH = 20;

  let isValid = !(topic.title.length > MAX_TITLE_LENGTH || topic.author.isBlocked);
  return isValid;
}

function isEmailAuthorized(email){
  const EMAIL_DOMAIN = "@codeschool.com";
  return email.indexOf(EMAIL_DOMAIN) > 0;
}

export {isTopicValid, isEmailAuthorized};

// importing

import * as flash from './something';

import isTopicValid from './is-topic-valid';

import {isTopicValid, isEmailAuthorized} from "./validators";

let author = { name: "Sam", email: "sam@codeschool.com", isBlocked: false };
let topic = {
  title: "ES2015",
  author
};

isTopicValid(topic);
isEmailAuthorized(author.email);


let topic = {
  title: "ES2015",
  author: { name: "Sam", isBlocked: false }
};

isTopicValid(topic);


// exporting constants

const MAX_TITLE_LENGTH = 20;
const EMAIL_DOMAIN = "@codeschool.com";

export {MAX_TITLE_LENGTH,EMAIL_DOMAIN};

class FlashMsg {

};

export { FlashMsg };

import TagManager from "./tag-manager-class";

let tagManager = new TagManager(20);
tagManager.addTag("JavaScript");

// Promises & callbacks

function getP() {
  return new Promises(function(resolve, reject){
    let url = "./path";
    request.onload = function() {
      resolve();
    }
  })
}

// handlers, execute, 
// pending state, fulfilled or rejected

export default function getReplies(topicId){
  return new Promise(function( resolve, reject ){
    _getRepliesForTopic(topicId, function(data){
      let replies = data.replies;
      if(replies){
        resolve(replies);
      }else{
        let error = new Error("An error occurred");
        reject(error);
      }
    });
  });
}
getReplies(1)
.then(function(replies){
  return replies.filter( reply => !reply.isAbuse );
})
.then(function(filteredReplies){
  console.log( filteredReplies );
})
.catch(function(error){
  console.log(error);
}) ;


// iterators custom loop

// arries for of loop

let iterator = names[Symbol.iterator]();

let firstRun = interator.next();
let name = firstRun.value;

let secondRun = interator.next;
let name = secondRun.value;

{done: falase, value: "Sam"};

let post = {
  t: "JS",
  r: 19
}

post[Symbol.iterator] = function() {

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  let next = () => {
    if(count >= properties.length) {
      isDone = true;
    }
    return {done: isDone, value: this[properties[count++]]}
  }
  return {next};
}

// putting iterator on to an object 

let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function(){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  let next = () => {
    if(count >= properties.length){
      isDone = true;
    }

    let value = this[properties[count++]];

    return { done: isDone, value};
  };
  return { next };
};


// generators

function *nameL() {
  yield "Sam";
}

// return objects provid next

post[Symbol.iterator] = function*() {

  let properties = Object.keys(this);
  for(let p of properties) {
    yield this[p]
  }
}

function *topicList(){
  yield "ES2015";
  yield "Semi-colons: good or bad?";
  yield "TypeScript";
}

for(let topic of topicList() ){
  console.log( topic );
}

let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function * (){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  for(let p of properties){
    yield this[p];
  }
};

for(let p of user){
  console.log( p );
}







