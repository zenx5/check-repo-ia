interface fileRepo {
    name: string,
    path: string,
    sha: string,
    size: number,
    url: string,
    html_url: string,
    git_url: string,
    download_url: string,
    type: string,
    _links: {
        self: string,
        git: string,
        html: string
    }
}

interface FileType{
    index: number,
    name: string,
    path: string,
    numberFixes: number,
    rate: number,
    deep: number
}

interface ContentType{
    value: string,
    description: string,
    fixes: string[],
    rate: number
}

interface FileDirectoryType {
    name: string,
    path: string,
    files: FileDirectoryType[]
}
