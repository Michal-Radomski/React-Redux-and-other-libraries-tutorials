var faker = require("faker");
function generatePosts() {
  var posts = [];
  for (var id = 1; id <= 25; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();
    var details = faker.lorem.words();

    posts.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      details: details,
    });
  }
  return {posts: posts};
}
module.exports = generatePosts;
