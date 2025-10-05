// Command data organized by category
const commandData = {
    "linux": [
        {
            "command": "ls -la",
            "description": "List all files and directories with detailed information including hidden files",
            "usage": "View complete directory contents with permissions and timestamps"
        },
        {
            "command": "pwd",
            "description": "Print current working directory path",
            "usage": "Know your current location in the file system"
        },
        {
            "command": "cd /path/to/directory",
            "description": "Change current directory to specified path",
            "usage": "Navigate through directory structure"
        },
        {
            "command": "mkdir -p path/to/new/directory",
            "description": "Create directory with parent directories if needed",
            "usage": "Create nested directory structures for data projects"
        },
        {
            "command": "cp -r source destination",
            "description": "Copy files or directories recursively",
            "usage": "Backup data files or replicate directory structures"
        },
        {
            "command": "mv oldname newname",
            "description": "Move or rename files and directories",
            "usage": "Reorganize data files and folders"
        },
        {
            "command": "rm -rf directory",
            "description": "Remove files and directories recursively (use with caution)",
            "usage": "Clean up temporary files and old data"
        },
        {
            "command": "find . -name '*.csv' -type f",
            "description": "Find all CSV files in current directory and subdirectories",
            "usage": "Locate specific data files in large directory structures"
        },
        {
            "command": "grep -r 'pattern' /path",
            "description": "Search for text pattern recursively in files",
            "usage": "Find specific content in log files or configuration files"
        },
        {
            "command": "tail -f /var/log/application.log",
            "description": "Display last lines of file and follow new additions in real-time",
            "usage": "Monitor data pipeline logs and application outputs"
        },
        {
            "command": "head -n 20 datafile.csv",
            "description": "Display first 20 lines of a file",
            "usage": "Preview data file contents and structure"
        },
        {
            "command": "wc -l filename",
            "description": "Count number of lines in a file",
            "usage": "Get record count for data validation"
        },
        {
            "command": "du -sh /path/to/directory",
            "description": "Display disk usage of directory in human readable format",
            "usage": "Monitor data storage consumption"
        },
        {
            "command": "df -h",
            "description": "Display filesystem disk space usage in human readable format",
            "usage": "Check available storage for data operations"
        },
        {
            "command": "chmod 755 script.sh",
            "description": "Change file permissions to make script executable",
            "usage": "Set proper permissions for data processing scripts"
        },
        {
            "command": "ps aux | grep python",
            "description": "List all processes and filter for Python processes",
            "usage": "Monitor running data processing jobs"
        },
        {
            "command": "kill -9 PID",
            "description": "Force kill a process by its process ID",
            "usage": "Stop stuck or runaway data processing jobs"
        },
        {
            "command": "top",
            "description": "Display real-time system processes and resource usage",
            "usage": "Monitor system performance during data processing"
        },
        {
            "command": "htop",
            "description": "Enhanced version of top with better interface",
            "usage": "Advanced system monitoring for resource-intensive data operations"
        },
        {
            "command": "free -h",
            "description": "Display memory usage in human readable format",
            "usage": "Monitor available RAM for data processing jobs"
        }
    ],
    "bash": [
        {
            "command": "#!/bin/bash",
            "description": "Shebang line to specify bash interpreter for scripts",
            "usage": "Start all bash scripts for data pipelines"
        },
        {
            "command": "for file in *.csv; do echo $file; done",
            "description": "Loop through all CSV files in current directory",
            "usage": "Process multiple data files in batch operations"
        },
        {
            "command": "if [ -f 'file.csv' ]; then echo 'exists'; fi",
            "description": "Check if file exists before processing",
            "usage": "Validate input files in data pipeline scripts"
        },
        {
            "command": "variable='value'",
            "description": "Assign value to variable (no spaces around =)",
            "usage": "Store configuration values and file paths in scripts"
        },
        {
            "command": "echo $variable",
            "description": "Print variable value to stdout",
            "usage": "Display script progress and variable values for debugging"
        },
        {
            "command": "command1 | command2",
            "description": "Pipe output from first command to second command",
            "usage": "Chain data processing commands together"
        },
        {
            "command": "command > output.txt",
            "description": "Redirect command output to file (overwrites file)",
            "usage": "Save data processing results to files"
        },
        {
            "command": "command >> output.txt",
            "description": "Redirect command output to file (appends to file)",
            "usage": "Append new data to existing result files"
        },
        {
            "command": "command 2>&1",
            "description": "Redirect both stdout and stderr to same destination",
            "usage": "Capture all script output including errors for logging"
        },
        {
            "command": "nohup command &",
            "description": "Run command in background, immune to hangups",
            "usage": "Run long-running data processing jobs"
        },
        {
            "command": "crontab -e",
            "description": "Edit user's cron jobs for scheduled tasks",
            "usage": "Schedule automated data pipeline executions"
        },
        {
            "command": "0 2 * * * /path/to/script.sh",
            "description": "Cron expression to run script daily at 2 AM",
            "usage": "Schedule daily data processing jobs"
        },
        {
            "command": "awk -F, '{print $1,$3}' file.csv",
            "description": "Extract specific columns from CSV using comma delimiter",
            "usage": "Extract specific fields from structured data files"
        },
        {
            "command": "sed 's/old/new/g' file.txt",
            "description": "Replace all occurrences of 'old' with 'new' in file",
            "usage": "Clean and standardize data values in text files"
        },
        {
            "command": "sort -k 2 -n file.csv",
            "description": "Sort file numerically by second column",
            "usage": "Sort data records by specific numeric fields"
        },
        {
            "command": "uniq -c sorted_file.txt",
            "description": "Count unique lines in sorted file",
            "usage": "Analyze data frequency and remove duplicates"
        },
        {
            "command": "cut -d, -f1,3 file.csv",
            "description": "Extract columns 1 and 3 from comma-separated file",
            "usage": "Select specific columns from structured data"
        },
        {
            "command": "join file1.txt file2.txt",
            "description": "Join lines from two sorted files on common field",
            "usage": "Combine data from multiple sorted data sources"
        },
        {
            "command": "paste file1.txt file2.txt",
            "description": "Merge lines from files side by side",
            "usage": "Combine data columns from multiple files"
        }
    ],
    "git": [
        {
            "command": "git init",
            "description": "Initialize a new Git repository in current directory",
            "usage": "Start version control for new data engineering projects"
        },
        {
            "command": "git clone <repository-url>",
            "description": "Clone a remote repository to local machine",
            "usage": "Get existing data engineering projects and collaborate"
        },
        {
            "command": "git add .",
            "description": "Stage all modified files for commit",
            "usage": "Prepare all changed files for version control"
        },
        {
            "command": "git add filename",
            "description": "Stage specific file for commit",
            "usage": "Selectively stage specific data pipeline files"
        },
        {
            "command": "git commit -m 'message'",
            "description": "Commit staged changes with descriptive message",
            "usage": "Save changes to project history with meaningful descriptions"
        },
        {
            "command": "git status",
            "description": "Show current repository status and modified files",
            "usage": "Check which files have been modified in data projects"
        },
        {
            "command": "git push origin main",
            "description": "Push local commits to remote main branch",
            "usage": "Share data pipeline changes with team"
        },
        {
            "command": "git pull origin main",
            "description": "Fetch and merge changes from remote main branch",
            "usage": "Get latest updates from team members"
        },
        {
            "command": "git branch feature-name",
            "description": "Create new branch for feature development",
            "usage": "Develop new data pipeline features in isolation"
        },
        {
            "command": "git checkout branch-name",
            "description": "Switch to specified branch",
            "usage": "Work on different data pipeline features or environments"
        },
        {
            "command": "git checkout -b new-branch",
            "description": "Create and switch to new branch in one command",
            "usage": "Start new feature development quickly"
        },
        {
            "command": "git merge feature-branch",
            "description": "Merge feature branch into current branch",
            "usage": "Integrate completed data pipeline features"
        },
        {
            "command": "git log --oneline",
            "description": "Show commit history in compact format",
            "usage": "Review data pipeline development history"
        },
        {
            "command": "git diff",
            "description": "Show unstaged changes in working directory",
            "usage": "Review code changes before staging"
        },
        {
            "command": "git diff --staged",
            "description": "Show staged changes ready for commit",
            "usage": "Review changes before committing to repository"
        },
        {
            "command": "git stash",
            "description": "Temporarily save uncommitted changes",
            "usage": "Save work in progress when switching contexts"
        },
        {
            "command": "git stash pop",
            "description": "Apply most recent stashed changes and remove from stash",
            "usage": "Restore temporarily saved work"
        },
        {
            "command": "git reset --hard HEAD~1",
            "description": "Reset to previous commit, discarding all changes",
            "usage": "Undo commits and changes (use with caution)"
        },
        {
            "command": "git tag v1.0.0",
            "description": "Create lightweight tag for current commit",
            "usage": "Mark data pipeline releases and versions"
        },
        {
            "command": "git remote -v",
            "description": "Show remote repository URLs",
            "usage": "Verify remote repository connections"
        }
    ],
    "databricks": [
        {
            "command": "databricks configure",
            "description": "Configure Databricks CLI with authentication credentials",
            "usage": "Set up CLI access to Databricks workspace"
        },
        {
            "command": "databricks clusters list",
            "description": "List all available clusters in workspace",
            "usage": "View available compute resources for data processing"
        },
        {
            "command": "databricks clusters start --cluster-id <id>",
            "description": "Start a specific cluster by ID",
            "usage": "Spin up compute resources for data processing jobs"
        },
        {
            "command": "databricks clusters terminate --cluster-id <id>",
            "description": "Terminate a running cluster to save costs",
            "usage": "Stop compute resources when not needed"
        },
        {
            "command": "databricks fs ls dbfs:/",
            "description": "List files and directories in Databricks File System",
            "usage": "Navigate and explore data stored in DBFS"
        },
        {
            "command": "databricks fs cp local_file.csv dbfs:/path/",
            "description": "Copy local file to Databricks File System",
            "usage": "Upload data files for processing in Databricks"
        },
        {
            "command": "databricks fs cp dbfs:/path/file.csv ./",
            "description": "Copy file from DBFS to local machine",
            "usage": "Download processed results from Databricks"
        },
        {
            "command": "databricks jobs list",
            "description": "List all jobs in the Databricks workspace",
            "usage": "View scheduled and available data processing jobs"
        },
        {
            "command": "databricks jobs run-now --job-id <id>",
            "description": "Trigger immediate execution of specified job",
            "usage": "Manually run data pipelines and ETL jobs"
        },
        {
            "command": "databricks runs list --job-id <id>",
            "description": "List all runs for a specific job",
            "usage": "Monitor job execution history and status"
        },
        {
            "command": "databricks workspace list /",
            "description": "List workspace contents at root level",
            "usage": "Navigate notebooks and workspace resources"
        },
        {
            "command": "databricks workspace export /path/notebook.py ./",
            "description": "Export notebook from workspace to local file",
            "usage": "Backup notebooks and share code outside Databricks"
        },
        {
            "command": "databricks workspace import ./notebook.py /path/",
            "description": "Import local file as notebook to workspace",
            "usage": "Deploy notebooks from version control to Databricks"
        },
        {
            "command": "databricks libraries cluster-status --cluster-id <id>",
            "description": "Check library installation status on cluster",
            "usage": "Verify required packages are available for data processing"
        },
        {
            "command": "databricks current-user me",
            "description": "Display current user information",
            "usage": "Verify authentication and user permissions"
        }
    ],
    "curl": [
        {
            "command": "curl https://api.example.com/data",
            "description": "Make simple GET request to API endpoint",
            "usage": "Retrieve data from REST APIs for ingestion"
        },
        {
            "command": "curl -X POST https://api.example.com/data",
            "description": "Send POST request to API endpoint",
            "usage": "Submit data to APIs or trigger data processing"
        },
        {
            "command": "curl -H 'Authorization: Bearer token' url",
            "description": "Send request with authorization header",
            "usage": "Access protected APIs with authentication tokens"
        },
        {
            "command": "curl -H 'Content-Type: application/json' url",
            "description": "Specify content type in request header",
            "usage": "Send JSON data to APIs properly formatted"
        },
        {
            "command": "curl -d '{key:value}' url",
            "description": "Send JSON data in POST request body",
            "usage": "Submit structured data to APIs"
        },
        {
            "command": "curl -d @data.json url",
            "description": "Send JSON data from file in request body",
            "usage": "Upload data files to APIs"
        },
        {
            "command": "curl -o output.json url",
            "description": "Save response to specified file",
            "usage": "Download data from APIs to local files"
        },
        {
            "command": "curl -L url",
            "description": "Follow HTTP redirects automatically",
            "usage": "Handle API redirects transparently"
        },
        {
            "command": "curl -v url",
            "description": "Enable verbose output showing request/response details",
            "usage": "Debug API interactions and troubleshoot issues"
        },
        {
            "command": "curl -s url",
            "description": "Silent mode - suppress progress and error output",
            "usage": "Clean API responses for automated processing"
        },
        {
            "command": "curl -w '%{http_code}' url",
            "description": "Output HTTP status code after request",
            "usage": "Check API response status in automated scripts"
        },
        {
            "command": "curl --retry 3 url",
            "description": "Retry failed requests up to 3 times",
            "usage": "Handle temporary API failures in data pipelines"
        },
        {
            "command": "curl --max-time 30 url",
            "description": "Set maximum time for entire operation",
            "usage": "Prevent hanging requests in automated data collection"
        },
        {
            "command": "curl -u username:password url",
            "description": "Use basic authentication with username/password",
            "usage": "Access APIs requiring basic authentication"
        },
        {
            "command": "curl --json '{data:value}' url",
            "description": "Send JSON with automatic content-type header (curl 7.82+)",
            "usage": "Modern way to send JSON data to APIs"
        }
    ],
    "docker": [
        {
            "command": "docker run -d --name container-name image",
            "description": "Run container in background with custom name",
            "usage": "Deploy data processing services and databases"
        },
        {
            "command": "docker run -it ubuntu bash",
            "description": "Run container interactively with terminal",
            "usage": "Debug and test data processing environments"
        },
        {
            "command": "docker ps",
            "description": "List currently running containers",
            "usage": "Monitor active data processing containers"
        },
        {
            "command": "docker ps -a",
            "description": "List all containers including stopped ones",
            "usage": "View complete container history and status"
        },
        {
            "command": "docker images",
            "description": "List available Docker images",
            "usage": "Manage data processing environment images"
        },
        {
            "command": "docker pull image-name:tag",
            "description": "Download image from Docker registry",
            "usage": "Get latest data processing tools and databases"
        },
        {
            "command": "docker build -t image-name .",
            "description": "Build image from Dockerfile in current directory",
            "usage": "Create custom data processing environments"
        },
        {
            "command": "docker exec -it container-name bash",
            "description": "Execute interactive shell in running container",
            "usage": "Debug running data processing containers"
        },
        {
            "command": "docker logs container-name",
            "description": "View container logs and output",
            "usage": "Monitor data pipeline execution and debug issues"
        },
        {
            "command": "docker logs -f container-name",
            "description": "Follow container logs in real-time",
            "usage": "Monitor live data processing job outputs"
        },
        {
            "command": "docker stop container-name",
            "description": "Stop running container gracefully",
            "usage": "Shut down data processing services properly"
        },
        {
            "command": "docker rm container-name",
            "description": "Remove stopped container",
            "usage": "Clean up completed data processing jobs"
        },
        {
            "command": "docker rmi image-name",
            "description": "Remove Docker image from local system",
            "usage": "Free up storage space from unused images"
        },
        {
            "command": "docker-compose up -d",
            "description": "Start multi-container application in background",
            "usage": "Deploy complete data processing stacks"
        },
        {
            "command": "docker-compose down",
            "description": "Stop and remove multi-container application",
            "usage": "Tear down complete data processing environments"
        },
        {
            "command": "docker volume create volume-name",
            "description": "Create named volume for persistent storage",
            "usage": "Persist data across container restarts"
        },
        {
            "command": "docker run -v volume-name:/data image",
            "description": "Mount named volume to container directory",
            "usage": "Ensure data persistence in processing containers"
        },
        {
            "command": "docker stats",
            "description": "Display real-time container resource usage",
            "usage": "Monitor container performance and resource consumption"
        },
        {
            "command": "docker system prune -a",
            "description": "Remove unused containers, images, and networks",
            "usage": "Clean up Docker system and free storage space"
        }
    ],
    "sql": [
        {
            "command": "SELECT * FROM table_name;",
            "description": "Retrieve all columns and rows from table",
            "usage": "Explore data structure and content"
        },
        {
            "command": "SELECT column1, column2 FROM table_name;",
            "description": "Retrieve specific columns from table",
            "usage": "Extract only needed data fields"
        },
        {
            "command": "SELECT * FROM table_name WHERE condition;",
            "description": "Filter rows based on specified condition",
            "usage": "Extract data meeting specific criteria"
        },
        {
            "command": "SELECT COUNT(*) FROM table_name;",
            "description": "Count total number of rows in table",
            "usage": "Data quality checks and validation"
        },
        {
            "command": "SELECT DISTINCT column FROM table_name;",
            "description": "Get unique values from specified column",
            "usage": "Identify unique categories and data profiling"
        },
        {
            "command": "SELECT * FROM table_name ORDER BY column ASC;",
            "description": "Sort results by column in ascending order",
            "usage": "Organize data for analysis and reporting"
        },
        {
            "command": "SELECT * FROM table_name LIMIT 10;",
            "description": "Limit results to specified number of rows",
            "usage": "Sample data for testing and preview"
        },
        {
            "command": "INSERT INTO table_name (col1, col2) VALUES (val1, val2);",
            "description": "Insert new row with specified values",
            "usage": "Add new data records to tables"
        },
        {
            "command": "UPDATE table_name SET column = value WHERE condition;",
            "description": "Update existing rows matching condition",
            "usage": "Modify data values during ETL processes"
        },
        {
            "command": "DELETE FROM table_name WHERE condition;",
            "description": "Remove rows matching specified condition",
            "usage": "Clean data and remove invalid records"
        },
        {
            "command": "CREATE TABLE table_name (column1 TYPE, column2 TYPE);",
            "description": "Create new table with specified schema",
            "usage": "Define data structures for new datasets"
        },
        {
            "command": "DROP TABLE table_name;",
            "description": "Delete table and all its data permanently",
            "usage": "Remove obsolete tables (use with caution)"
        },
        {
            "command": "ALTER TABLE table_name ADD COLUMN new_col TYPE;",
            "description": "Add new column to existing table",
            "usage": "Extend table schema for additional data"
        },
        {
            "command": "SELECT t1.*, t2.column FROM table1 t1 JOIN table2 t2 ON t1.id = t2.id;",
            "description": "Join two tables on common column",
            "usage": "Combine data from multiple related tables"
        },
        {
            "command": "SELECT column, COUNT(*) FROM table_name GROUP BY column;",
            "description": "Group rows and count occurrences per group",
            "usage": "Aggregate data for analysis and reporting"
        },
        {
            "command": "SELECT column, SUM(value) FROM table_name GROUP BY column HAVING SUM(value) > 100;",
            "description": "Group data and filter groups by aggregate condition",
            "usage": "Advanced aggregation with group-level filtering"
        },
        {
            "command": "WITH cte AS (SELECT * FROM table WHERE condition) SELECT * FROM cte;",
            "description": "Create Common Table Expression for complex queries",
            "usage": "Break down complex queries into readable parts"
        },
        {
            "command": "CREATE INDEX idx_name ON table_name (column);",
            "description": "Create index on column for faster queries",
            "usage": "Optimize query performance on large tables"
        },
        {
            "command": "EXPLAIN SELECT * FROM table_name WHERE condition;",
            "description": "Show query execution plan and performance details",
            "usage": "Analyze and optimize query performance"
        }
    ],
    "tools": [
        {
            "command": "jq '.field' data.json",
            "description": "Extract specific field from JSON file",
            "usage": "Parse and transform JSON API responses"
        },
        {
            "command": "jq '.[] | select(.status == 'active')' data.json",
            "description": "Filter JSON array by field value",
            "usage": "Filter data from API responses"
        },
        {
            "command": "pgcli -h localhost -U postgres -d database",
            "description": "Connect to PostgreSQL with enhanced CLI features",
            "usage": "Interactive PostgreSQL sessions with autocomplete"
        },
        {
            "command": "vd file.csv",
            "description": "Open CSV file in VisiData spreadsheet interface",
            "usage": "Interactively explore and analyze data files"
        },
        {
            "command": "bat filename",
            "description": "Display file contents with syntax highlighting",
            "usage": "View code and data files with better formatting"
        },
        {
            "command": "fzf",
            "description": "Fuzzy finder for interactive file and command search",
            "usage": "Quickly find files, commands, and data in directories"
        },
        {
            "command": "httpie GET https://api.example.com/data",
            "description": "Make HTTP requests with user-friendly syntax",
            "usage": "Test APIs with more readable syntax than curl"
        },
        {
            "command": "lnav /var/log/application.log",
            "description": "Navigate and search log files with SQL queries",
            "usage": "Analyze application and system logs efficiently"
        },
        {
            "command": "csvkit in2csv data.xlsx > data.csv",
            "description": "Convert Excel file to CSV format",
            "usage": "Convert various data formats for processing"
        },
        {
            "command": "csvstat data.csv",
            "description": "Generate statistical summary of CSV file",
            "usage": "Quick data profiling and quality assessment"
        },
        {
            "command": "q 'SELECT * FROM data.csv WHERE column > 100'",
            "description": "Run SQL queries directly on CSV files",
            "usage": "Query CSV files without loading into database"
        },
        {
            "command": "miller --csv cut -f field1,field3 data.csv",
            "description": "Process CSV files with Miller data processing tool",
            "usage": "Transform and manipulate structured data files"
        },
        {
            "command": "dvc add data/raw_data.csv",
            "description": "Add data file to DVC (Data Version Control)",
            "usage": "Version control large datasets efficiently"
        },
        {
            "command": "great_expectations init",
            "description": "Initialize Great Expectations for data validation",
            "usage": "Set up data quality testing framework"
        },
        {
            "command": "airflow dags list",
            "description": "List all available Airflow DAGs",
            "usage": "View available data pipeline workflows"
        }
    ]
};

// Category configuration
const categoryConfig = {
    "linux": { icon: "fab fa-linux", title: "Linux Commands", count: 20 },
    "bash": { icon: "fas fa-terminal", title: "Bash/Shell Commands", count: 19 },
    "git": { icon: "fab fa-git-alt", title: "Git Commands", count: 20 },
    "databricks": { icon: "fas fa-database", title: "Databricks CLI Commands", count: 15 },
    "curl": { icon: "fas fa-globe", title: "Curl Commands", count: 15 },
    "docker": { icon: "fab fa-docker", title: "Docker Commands", count: 19 },
    "sql": { icon: "fas fa-table", title: "SQL Commands", count: 19 },
    "tools": { icon: "fas fa-tools", title: "Additional CLI Tools", count: 15 }
};

// Global variables
let currentCategory = 'all';
let searchTerm = '';
let allCommands = [];

// DOM elements
let elements = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeTheme();
    initializeCommands();
    renderCommands();
    setupEventListeners();
    setupIntersectionObserver();
    hideLoading();
});

// Initialize DOM elements
function initializeElements() {
    elements = {
        searchInput: document.getElementById('search-input'),
        clearSearchBtn: document.getElementById('clear-search'),
        backToTopBtn: document.getElementById('back-to-top'),
        themeToggleBtn: document.getElementById('theme-toggle'),
        themeIcon: document.getElementById('theme-icon'),
        sections: document.getElementById('command-sections'),
        noResults: document.getElementById('no-results'),
        loading: document.getElementById('loading'),
        navItems: document.querySelectorAll('.nav-item')
    };
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
    updateThemeIcon(savedTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    if (elements.themeIcon) {
        elements.themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.body.className || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Initialize commands array
function initializeCommands() {
    allCommands = [];
    Object.keys(commandData).forEach(category => {
        commandData[category].forEach(cmd => {
            allCommands.push({
                ...cmd,
                category: category
            });
        });
    });
}

// Hide loading indicator
function hideLoading() {
    if (elements.loading) {
        elements.loading.style.display = 'none';
    }
}

// Render commands based on current filters
function renderCommands() {
    if (!elements.sections) return;

    const filteredCommands = getFilteredCommands();
    const groupedCommands = groupCommandsByCategory(filteredCommands);

    elements.sections.innerHTML = '';

    if (filteredCommands.length === 0) {
        showNoResults();
        return;
    }

    hideNoResults();

    Object.keys(groupedCommands).forEach(category => {
        const section = createSection(category, groupedCommands[category]);
        elements.sections.appendChild(section);
    });
}

// Get filtered commands based on search and category
function getFilteredCommands() {
    let filtered = allCommands;

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(cmd => cmd.category === currentCategory);
    }

    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(cmd => 
            cmd.command.toLowerCase().includes(searchTerm) ||
            cmd.description.toLowerCase().includes(searchTerm) ||
            cmd.usage.toLowerCase().includes(searchTerm)
        );
    }

    return filtered;
}

// Group commands by category
function groupCommandsByCategory(commands) {
    const grouped = {};
    commands.forEach(cmd => {
        if (!grouped[cmd.category]) {
            grouped[cmd.category] = [];
        }
        grouped[cmd.category].push(cmd);
    });
    return grouped;
}

// Create a section element
function createSection(category, commands) {
    const config = categoryConfig[category];
    if (!config) return document.createElement('div');

    const section = document.createElement('section');
    section.className = 'section';
    section.setAttribute('data-category', category);

    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';
    sectionHeader.onclick = () => toggleSection(section);

    sectionHeader.innerHTML = `
        <div class="section-title-wrapper">
            <i class="${config.icon} section-icon"></i>
            <h2 class="section-title">${config.title}</h2>
            <span class="command-count">${commands.length} commands</span>
        </div>
        <button class="toggle-section" aria-label="Toggle section">
            <i class="fas fa-chevron-down"></i>
        </button>
    `;

    const sectionContent = document.createElement('div');
    sectionContent.className = 'section-content';

    const commandsGrid = document.createElement('div');
    commandsGrid.className = 'commands-grid';

    commands.forEach((cmd, index) => {
        const commandCard = createCommandCard(cmd, category, index);
        commandsGrid.appendChild(commandCard);
    });

    sectionContent.appendChild(commandsGrid);
    section.appendChild(sectionHeader);
    section.appendChild(sectionContent);

    return section;
}

// Create a command card
function createCommandCard(command, category, index) {
    const card = document.createElement('div');
    card.className = 'command-card';
    card.setAttribute('data-command', command.command.toLowerCase());
    card.setAttribute('data-description', command.description.toLowerCase());

    const cardId = `${category}-${index}`;

    card.innerHTML = `
        <div class="command-header">
            <code class="command-text">${escapeHtml(command.command)}</code>
            <button class="copy-btn" onclick="copyCommand('${escapeHtml(command.command)}')" aria-label="Copy command">
                <i class="fas fa-copy"></i>
            </button>
        </div>
        <div class="command-description">${escapeHtml(command.description)}</div>
        <div class="command-usage">${escapeHtml(command.usage)}</div>
    `;

    return card;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Toggle section visibility
function toggleSection(section) {
    section.classList.toggle('collapsed');
}

// Copy command to clipboard
async function copyCommand(command) {
    try {
        // Decode HTML entities for copying
        const decodedCommand = command
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");

        await navigator.clipboard.writeText(decodedCommand);

        // Find the button that was clicked and show feedback
        const buttons = document.querySelectorAll('.copy-btn');
        buttons.forEach(btn => {
            if (btn.getAttribute('onclick').includes(command)) {
                showCopyFeedback(btn);
            }
        });

    } catch (err) {
        console.error('Failed to copy command:', err);
        // Fallback for older browsers
        fallbackCopyTextToClipboard(command);
    }
}

// Show copy feedback
function showCopyFeedback(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.classList.add('copied');

    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('copied');
    }, 2000);
}

// Fallback copy function
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Fallback: Unable to copy', err);
    }

    document.body.removeChild(textArea);
}

// Search functionality
function performSearch() {
    if (!elements.searchInput) return;

    searchTerm = elements.searchInput.value.toLowerCase().trim();

    // Toggle clear button visibility
    if (elements.clearSearchBtn) {
        elements.clearSearchBtn.style.display = searchTerm.length > 0 ? 'block' : 'none';
    }

    renderCommands();
}

// Clear search
function clearSearch() {
    if (elements.searchInput) {
        elements.searchInput.value = '';
    }
    searchTerm = '';

    if (elements.clearSearchBtn) {
        elements.clearSearchBtn.style.display = 'none';
    }

    renderCommands();

    if (elements.searchInput) {
        elements.searchInput.focus();
    }
}

// Show no results message
function showNoResults() {
    if (elements.noResults) {
        elements.noResults.style.display = 'block';
    }
}

// Hide no results message
function hideNoResults() {
    if (elements.noResults) {
        elements.noResults.style.display = 'none';
    }
}

// Handle category filter
function handleCategoryFilter(category) {
    currentCategory = category;

    // Update active nav item
    elements.navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-category') === category) {
            item.classList.add('active');
        }
    });

    renderCommands();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', performSearch);
        elements.searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                clearSearch();
            }
        });
    }

    // Clear search
    if (elements.clearSearchBtn) {
        elements.clearSearchBtn.addEventListener('click', clearSearch);
    }

    // Theme toggle
    if (elements.themeToggleBtn) {
        elements.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Back to top
    if (elements.backToTopBtn) {
        elements.backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Navigation items
    elements.navItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            handleCategoryFilter(category);
        });
    });

    // Scroll handling for back to top button
    window.addEventListener('scroll', function() {
        if (elements.backToTopBtn) {
            const scrolled = window.pageYOffset > 300;
            elements.backToTopBtn.classList.toggle('visible', scrolled);
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (elements.searchInput) {
                elements.searchInput.focus();
                elements.searchInput.select();
            }
        }

        // Esc to clear search when search is focused
        if (e.key === 'Escape' && document.activeElement === elements.searchInput) {
            clearSearch();
        }
    });
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
    if (!window.IntersectionObserver) return;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe sections as they are created
    const observeSections = () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            if (!section.hasAttribute('data-observed')) {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                section.setAttribute('data-observed', 'true');
                observer.observe(section);
            }
        });
    };

    // Initial observation
    setTimeout(observeSections, 100);

    // Re-observe when content changes
    const originalRenderCommands = renderCommands;
    renderCommands = function() {
        originalRenderCommands();
        setTimeout(observeSections, 100);
    };
}

// Make functions available globally for onclick handlers
window.toggleSection = toggleSection;
window.copyCommand = copyCommand;
window.handleCategoryFilter = handleCategoryFilter;