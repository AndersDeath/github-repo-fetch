import { getGithubData, ghParseData, getGithubDataGroup } from './gh';
import { Logger } from './logger';
import { addNtnItem, Item } from './ntn';

interface ghItem {
    id: number | null;
    node_id: string | null;
    name: string | null;
    full_name: string | null;
    private: boolean | null;
    owner: any | null;
    html_url: string | null;
    description: string | null;
    fork: boolean | null;
    url: string | null;
    forks_url: string | null;
    keys_url: string | null;
    collaborators_url: string | null;
    teams_url: string | null;
    hooks_url: string | null;
    issue_events_url: string | null;
    events_url: string | null;
    assignees_url: string | null;
    branches_url: string | null;
    tags_url: string | null;
    blobs_url: string | null;
    git_tags_url: string | null;
    git_refs_url: string | null;
    trees_url: string | null;
    statuses_url: string | null;
    languages_url: string | null;
    stargazers_url: string | null;
    contributors_url: string | null;
    subscribers_url: string | null;
    subscription_url: string | null;
    commits_url: string | null;
    git_commits_url: string | null;
    comments_url: string | null;
    issue_comment_url: string | null;
    contents_url: string | null;
    compare_url: string | null;
    merges_url: string | null;
    archive_url: string | null;
    downloads_url: string | null;
    issues_url: string | null;
    pulls_url: string | null;
    milestones_url: string | null;
    notifications_url: string | null;
    labels_url: string | null;
    releases_url: string | null;
    deployments_url: string | null;
    created_at: string | null;
    updated_at: string | null;
    pushed_at: string | null;
    git_url: string | null;
    ssh_url: string | null;
    clone_url: string | null;
    svn_url: string | null;
    homepage: string | null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    has_discussions: boolean,
    forks_count: number;
    mirror_url: string | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: string | null;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean,
    topics: any
    visibility: string | null,
    forks: number;
    open_issues: number;
    watchers: numbe;
    default_branch: string | null;
    permissions: any[];
    score: number;
}
interface ghData {
    total_count: boolean;
    incomplete_results: boolean;
    items: ghItem[]
}

/**
 * Logger instance
 */
const logger = new Logger();

/**
 * Application function
 */
export function App() {
    logger.info('Application has been started');
    const perPage: number = 20;
    let pageNumber: number = 1;
    getGithubData(perPage, pageNumber).then((e: any) => {
        console.log(e.data);
        // let data: Item[] = [];
        // const totalNumber:number = (e.data.total_count) as number;
        // data = [...data, ...ghParseData(e.data)];
        // getGithubDataGroup(pageNumber + 1, totalNumber, perPage).then((q: any) => {
        //     data = [...data, ...q];
        //     data.forEach((element: Partial<Item> )=> {
        //         addNtnItem(
        //             {
        //                 name: element.name,
        //                 html_url: element.html_url,
        //                 fork: element.fork,
        //                 description: element.description,
        //                 language: element.language,
        //                 archived: element.archived,
        //                 visibility: element.visibility,
        //                 created_at: element.created_at,
        //                 updated_at: element.updated_at,
        //                 pushed_at: element.pushed_at
        //             }
        //         );
        //     });
        // });
    });
}
