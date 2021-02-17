// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import post from "./post";
import author from "./author";
import projects from "./projects";
import aboutMe from "./aboutMe";

export default createSchema({
  // We name our schema
  name: "default",

  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    projects,
    aboutMe,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
