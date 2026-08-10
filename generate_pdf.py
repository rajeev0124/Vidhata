import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether

pdf_path = "D:\\Projects\\Vidhata\\GitHub_Pro_Guide.pdf"
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# Custom styles
primary_color = colors.HexColor("#0284C7")
dark_blue = colors.HexColor("#0F172A")
light_bg = colors.HexColor("#F8FAFC")
border_color = colors.HexColor("#E2E8F0")

title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=primary_color,
    alignment=0,
    spaceAfter=4
)

subtitle_style = ParagraphStyle(
    'DocSubTitle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=11,
    leading=14,
    textColor=colors.HexColor("#64748B"),
    spaceAfter=15
)

section_style = ParagraphStyle(
    'SectionHeading',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=14,
    leading=18,
    textColor=dark_blue,
    spaceBefore=12,
    spaceAfter=8
)

body_style = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=13,
    textColor=colors.HexColor("#334155")
)

cmd_style = ParagraphStyle(
    'CmdText',
    parent=styles['Normal'],
    fontName='Courier-Bold',
    fontSize=9,
    leading=12,
    textColor=colors.HexColor("#0EA5E9")
)

desc_style = ParagraphStyle(
    'DescText',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=12,
    textColor=colors.HexColor("#1E293B")
)

elements = []

# Title & Subtitle
elements.append(Paragraph("GitHub Mastery: Becoming a Pro Developer", title_style))
elements.append(Paragraph("A Concise Terminal Reference & Best Practices Guide | Vidhata Plastics Engineering", subtitle_style))
elements.append(HRFlowable(width="100%", thickness=1.5, color=primary_color, spaceAfter=12))

# Section 1: The Core 4 Workflow
elements.append(Paragraph("1. The Essential Daily Workflow", section_style))

data_sec1 = [
    [Paragraph("<b>Command</b>", body_style), Paragraph("<b>Description / Action</b>", body_style)],
    [Paragraph("<code>git status</code>", cmd_style), Paragraph("Check modified files, untracked files, and current branch state.", desc_style)],
    [Paragraph("<code>git add .</code>", cmd_style), Paragraph("Stage ALL modified & new files for the next commit snapshot.", desc_style)],
    [Paragraph("<code>git add &lt;file&gt;</code>", cmd_style), Paragraph("Stage a specific target file (e.g., <code>git add css/style.css</code>).", desc_style)],
    [Paragraph("<code>git commit -m \"msg\"</code>", cmd_style), Paragraph("Save a staged checkpoint with a clear, descriptive commit message.", desc_style)],
    [Paragraph("<code>git push &lt;remote&gt; &lt;branch&gt;</code>", cmd_style), Paragraph("Upload local commits to cloud (e.g. <code>git push origin main</code>).", desc_style)]
]

t1 = Table(data_sec1, colWidths=[170, 370])
t1.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#F1F5F9")),
    ('TEXTCOLOR', (0,0), (-1,0), dark_blue),
    ('GRID', (0,0), (-1,-1), 0.5, border_color),
    ('PADDING', (0,0), (-1,-1), 5),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))
elements.append(t1)
elements.append(Spacer(1, 10))

# Section 2: Remotes & Syncing
elements.append(Paragraph("2. Remotes & Synchronization", section_style))

data_sec2 = [
    [Paragraph("<b>Command</b>", body_style), Paragraph("<b>Description / Action</b>", body_style)],
    [Paragraph("<code>git remote -v</code>", cmd_style), Paragraph("List all connected remote repository URLs (fetch & push).", desc_style)],
    [Paragraph("<code>git remote add upstream &lt;url&gt;</code>", cmd_style), Paragraph("Link a secondary remote repository (e.g., team/main repo).", desc_style)],
    [Paragraph("<code>git fetch &lt;remote&gt;</code>", cmd_style), Paragraph("Download remote updates WITHOUT modifying local working code.", desc_style)],
    [Paragraph("<code>git pull &lt;remote&gt; &lt;branch&gt;</code>", cmd_style), Paragraph("Fetch AND merge remote updates directly into active branch.", desc_style)],
    [Paragraph("<code>git push upstream main</code>", cmd_style), Paragraph("Push local main branch commits to the upstream repository.", desc_style)]
]

t2 = Table(data_sec2, colWidths=[170, 370])
t2.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#F1F5F9")),
    ('TEXTCOLOR', (0,0), (-1,0), dark_blue),
    ('GRID', (0,0), (-1,-1), 0.5, border_color),
    ('PADDING', (0,0), (-1,-1), 5),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))
elements.append(t2)
elements.append(Spacer(1, 10))

# Section 3: Professional Branching
elements.append(Paragraph("3. Professional Branching & Merging", section_style))

data_sec3 = [
    [Paragraph("<b>Command</b>", body_style), Paragraph("<b>Description / Action</b>", body_style)],
    [Paragraph("<code>git branch</code>", cmd_style), Paragraph("List local branches (* indicates currently active branch).", desc_style)],
    [Paragraph("<code>git checkout -b feature-name</code>", cmd_style), Paragraph("Create AND switch to a new isolated feature branch.", desc_style)],
    [Paragraph("<code>git checkout main</code>", cmd_style), Paragraph("Switch active context back to the main development branch.", desc_style)],
    [Paragraph("<code>git merge feature-name</code>", cmd_style), Paragraph("Combine completed feature branch code into your current branch.", desc_style)],
    [Paragraph("<code>git branch -d feature-name</code>", cmd_style), Paragraph("Safely delete a feature branch after successful merge.", desc_style)]
]

t3 = Table(data_sec3, colWidths=[170, 370])
t3.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#F1F5F9")),
    ('TEXTCOLOR', (0,0), (-1,0), dark_blue),
    ('GRID', (0,0), (-1,-1), 0.5, border_color),
    ('PADDING', (0,0), (-1,-1), 5),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))
elements.append(t3)
elements.append(Spacer(1, 10))

# Section 4: Debugging & Undoing Changes
elements.append(Paragraph("4. Inspection, History & Safety Controls", section_style))

data_sec4 = [
    [Paragraph("<b>Command</b>", body_style), Paragraph("<b>Description / Action</b>", body_style)],
    [Paragraph("<code>git log --oneline -n 5</code>", cmd_style), Paragraph("Display a clean 1-line summary of the 5 most recent commits.", desc_style)],
    [Paragraph("<code>git diff</code>", cmd_style), Paragraph("Review exact line-by-line code changes before staging.", desc_style)],
    [Paragraph("<code>git restore &lt;file&gt;</code>", cmd_style), Paragraph("Discard uncommitted local edits (revert file to last commit).", desc_style)],
    [Paragraph("<code>git restore --staged &lt;file&gt;</code>", cmd_style), Paragraph("Unstage a file without losing its modified code.", desc_style)],
    [Paragraph("<code>git reset --soft HEAD~1</code>", cmd_style), Paragraph("Undo the last commit while keeping all code changes staged.", desc_style)]
]

t4 = Table(data_sec4, colWidths=[170, 370])
t4.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#F1F5F9")),
    ('TEXTCOLOR', (0,0), (-1,0), dark_blue),
    ('GRID', (0,0), (-1,-1), 0.5, border_color),
    ('PADDING', (0,0), (-1,-1), 5),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))
elements.append(t4)
elements.append(Spacer(1, 15))

# Footer Note
footer_p = Paragraph("<font color='#0284C7'><b>Pro Tip for Mastery:</b></font> Always run <code>git status</code> before and after executing any staging or commit commands. It gives you 100% visibility over your code state!", body_style)
elements.append(footer_p)

# Build Document
doc.build(elements)
print("PDF generated successfully at:", pdf_path)
