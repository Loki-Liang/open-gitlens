/**
 * GitLens-style file history navigation helpers.
 *
 * Kept independent from vscode so navigation behavior can be unit tested.
 */

function previousRevision(commits, sha) {
    const index = commits.findIndex(commit => commit.sha === sha);
    if (index < 0 || index >= commits.length - 1) {
        return undefined;
    }
    return commits[index + 1];
}

function nextRevision(commits, sha) {
    const index = commits.findIndex(commit => commit.sha === sha);
    if (index <= 0) {
        return undefined;
    }
    return commits[index - 1];
}

function revisionIndex(commits, sha) {
    return commits.findIndex(commit => commit.sha === sha);
}

module.exports = {
    previousRevision,
    nextRevision,
    revisionIndex,
};
