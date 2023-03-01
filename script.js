"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async ({ github, context, core }) => {
    const request = {
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: context.issue.number
    };
    core.info(`Getting PR #${request.pull_number} from ${request.owner}/${request.repo}`);
    try {
        const result = await github.rest.pulls.get(request);
        return result.data;
    }
    catch (err) {
        core.setFailed(`Request failed with error ${err}`);
    }
};
