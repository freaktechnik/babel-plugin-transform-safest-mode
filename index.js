export default function({ types }) {
    return {
        visitor: {
            MemberExpression(path) {
                path.replaceWith(types.optionalMemberExpression(path.node.object, path.node.property, path.node.computed, true));
            },
            OptionalMemberExpression(path) {
                if (path.node.optional) {
                    return;
                }
                path.replaceWith(types.optionalMemberExpression(path.node.object, path.node.property, path.node.computed, true));
            },
            CallExpression(path) {
                path.replaceWith(types.optionalCallExpression(path.node.callee, path.node.arguments, true));
            },
            OptionalCallExpression(path) {
                if (path.node.optional) {
                    return;
                }
                path.replaceWith(types.optionalCallExpression(path.node.callee, path.node.arguments, true));
            }
        }
    };
};
