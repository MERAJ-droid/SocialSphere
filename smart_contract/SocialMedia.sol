
pragma solidity ^0.8.0;

contract SocialMedia {
    struct Post {
        address author;
        string content;
        uint256 timestamp;
    }

    Post[] public posts;

    function createPost(string memory _content) public {
        posts.push(Post(msg.sender, _content, block.timestamp));
    }

    function getPosts() public view returns (Post[] memory) {
        return posts;
    }
}
