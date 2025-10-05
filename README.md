# Create a focused README.md file that only describes what the website actually has
readme_content = '''# Essential Data Engineering Commands - Quick Reference

A comprehensive interactive reference guide for essential data engineering commands including Linux, Bash, Git, Databricks, Curl, Docker, SQL, and additional CLI tools.

## ✨ Features

### 🎨 **Design & Interface**
- **Professional Typography** - DM Serif Display for headers, DM Sans for body text
- **Dark/Light Mode Toggle** - Switch between themes with the moon/sun icon
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant hover effects and transitions
- **Clean Layout** - Minimalist design focused on usability

### 🔍 **Functionality**
- **Real-time Search** - Find commands instantly as you type
- **Category Navigation** - Filter by technology (Linux, Git, Docker, etc.)
- **One-click Copy** - Copy any command to clipboard with visual feedback
- **Collapsible Sections** - Expand/collapse command categories
- **Keyboard Shortcuts** - Ctrl/Cmd+K for search, Esc to clear
- **Back-to-Top Button** - Quick navigation for long content

## 📚 Command Database (142+ Commands)

### **Linux Commands (20)**
File operations, system monitoring, and text processing commands:
- File management: `ls -la`, `cd`, `mkdir -p`, `cp -r`, `mv`, `rm -rf`
- Text processing: `grep -r`, `head`, `tail`, `wc -l`, `find`
- System monitoring: `top`, `htop`, `ps aux`, `free -h`, `df -h`, `du -sh`
- Process control: `kill -9`, `chmod`

### **Bash/Shell Commands (19)**
Scripting, automation, and data processing:
- Script basics: `#!/bin/bash`, variables, conditionals, loops
- Data processing: `awk`, `sed`, `sort`, `uniq`, `cut`, `join`, `paste`
- I/O operations: piping (`|`), redirection (`>`, `>>`), error handling (`2>&1`)
- Job control: `nohup`, `crontab`, background processes (`&`)

### **Git Commands (20)**
Version control and collaboration:
- Repository basics: `git init`, `git clone`, `git status`, `git log`
- Staging & commits: `git add`, `git commit`, `git push`, `git pull`
- Branching: `git branch`, `git checkout`, `git merge`, `git stash`
- Advanced operations: `git diff`, `git reset`, `git tag`, `git remote`

### **Databricks CLI Commands (15)**
Big data platform management:
- Setup: `databricks configure`
- Cluster operations: `clusters list`, `clusters start`, `clusters terminate`
- File system: `fs ls`, `fs cp` (DBFS operations)
- Job management: `jobs list`, `jobs run-now`, `runs list`
- Workspace: `workspace list`, `workspace export`, `workspace import`

### **Curl Commands (15)**
API testing and data transfer:
- HTTP requests: GET, POST with headers and authentication
- Data handling: JSON payloads, file uploads, response saving
- Options: redirects (`-L`), retries (`--retry`), timeouts, verbose mode (`-v`)
- Authentication: Bearer tokens, basic auth, custom headers

### **Docker Commands (19)**
Container management and deployment:
- Container lifecycle: `docker run`, `docker start`, `docker stop`, `docker rm`
- Image management: `docker build`, `docker pull`, `docker images`, `docker rmi`
- Debugging: `docker exec`, `docker logs`, `docker stats`
- Orchestration: `docker-compose up`, `docker-compose down`
- Maintenance: `docker system prune`, volume management

### **SQL Commands (19)**
Database operations and analytics:
- Data retrieval: `SELECT`, `WHERE`, `ORDER BY`, `LIMIT`, `DISTINCT`
- Data modification: `INSERT`, `UPDATE`, `DELETE`
- Table operations: `CREATE TABLE`, `DROP TABLE`, `ALTER TABLE`
- Advanced queries: `JOIN`, `GROUP BY`, `HAVING`, CTEs (`WITH`)
- Performance: `CREATE INDEX`, `EXPLAIN`

### **Additional CLI Tools (15)**
Modern productivity tools:
- JSON processing: `jq` for parsing and filtering
- Data exploration: `visidata` for interactive analysis
- Database tools: `pgcli` for enhanced PostgreSQL interaction
- File utilities: `bat` (syntax highlighting), `fzf` (fuzzy finding)
- Data formats: `csvkit`, `miller` for CSV processing
- Monitoring: `lnav` for logs, `httpie` for APIs
- Data tools: `dvc`, `great_expectations`, `airflow`

## 🎯 What Each Command Includes

Every command in the reference provides:
- **Command syntax** - Exact command with proper formatting
- **Clear description** - What the command does
- **Practical usage** - When and why to use it in data engineering workflows

## 🔧 Technical Details

### **Frontend Architecture**
- **Pure JavaScript** - No external frameworks
- **Modern CSS** - Custom properties, Grid, Flexbox
- **Semantic HTML5** - Proper structure and accessibility
- **Progressive Enhancement** - Works without JavaScript

### **Browser Support**
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

### **Performance Features**
- Fast initial load with efficient rendering
- Smooth search across all commands
- Optimized animations and transitions
- Minimal DOM manipulation for better performance

## 🎨 Design System

### **Typography**
- **Headers**: DM Serif Display - elegant serif font
- **Body text**: DM Sans - clean, readable sans-serif
- **Code blocks**: Monaco/Consolas monospace fonts

### **Color Scheme**
- **Light Mode**: Clean whites and blues with good contrast
- **Dark Mode**: Dark backgrounds with light text for comfortable viewing
- **Accent Colors**: Blue primary, green for success states

### **Layout**
- **Responsive Grid**: Adapts to screen size
- **Card-based Design**: Each command in its own card
- **Sticky Navigation**: Categories remain accessible while scrolling

## 🛠️ Customization

### **Adding New Commands**
Commands are stored in the `commandData` object in `app.js`:
```javascript
"category_name": [
    {
        "command": "your-command",
        "description": "What the command does",
        "usage": "When to use this command"
    }
]
```

### **Modifying Colors**
Colors are defined as CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #2563eb;
    --accent-color: #10b981;
    --background-color: #ffffff;
}
```

### **Changing Fonts**
Font imports are in the HTML head, with CSS variables:
```css
:root {
    --font-serif: "DM Serif Display", serif;
    --font-sans: "DM Sans", sans-serif;
}
```

## 📱 Mobile Experience

### **Responsive Features**
- **Touch-optimized**: Tap targets sized for mobile use
- **Horizontal scroll**: Category navigation adapts to small screens
- **Condensed layout**: Single-column design on mobile
- **Fast performance**: Optimized for mobile browsers

### **Mobile-specific Interactions**
- Tap to expand/collapse sections
- Swipe-friendly navigation
- Copy feedback optimized for touch
- Proper zoom behavior for command details

## 🔍 Search Functionality

### **Search Capabilities**
- **Real-time filtering**: Results update as you type
- **Cross-category search**: Finds commands across all categories
- **Multiple match types**: Searches command text, descriptions, and usage
- **Instant results**: No loading delays

### **Search Features**
- Search icon and clear button
- Keyboard shortcuts (Ctrl/Cmd+K to focus)
- "No results" message when needed
- Automatic section expansion for matches

## 🎪 Interactive Elements

### **Command Cards**
- **Hover effects**: Subtle animations on mouse over
- **Copy buttons**: One-click copying with success feedback
- **Code formatting**: Proper syntax highlighting in dark blocks
- **Responsive layout**: Adapts to different screen sizes

### **Navigation**
- **Category filtering**: Click categories to filter commands
- **Active states**: Current category highlighted
- **Smooth scrolling**: Enhanced page navigation
- **Back-to-top**: Appears when scrolling down

### **Theme Toggle**
- **Persistent preference**: Remembers your choice
- **Smooth transitions**: Animated theme switching
- **System integration**: Respects user's system preferences
- **Icon feedback**: Moon/sun icon changes with theme

## 📋 File Structure

```
├── index.html          # Main page structure and layout
├── style.css           # Complete styling and responsive design
├── app.js              # Functionality and command database
└── README.md           # This documentation
```

## 🎯 Use Cases

### **Daily Reference**
- Quick command lookup during development
- Copy commands directly to terminal
- Explore commands by technology category

### **Learning Tool**
- Understand command usage patterns
- Learn new tools and technologies
- See practical examples of command usage

### **Team Resource**
- Standardize command usage across team
- Onboard new data engineers
- Reference during code reviews

## ⚡ Performance

### **Optimizations**
- **Minimal dependencies**: No external JavaScript libraries
- **Efficient rendering**: Commands load quickly
- **Smooth interactions**: 60fps animations
- **Fast search**: Instant filtering across 142+ commands

### **Loading**
- **Quick startup**: Page loads and renders immediately
- **Progressive enhancement**: Core features work without JavaScript
- **Error handling**: Graceful fallbacks for any issues

---