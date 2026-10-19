# Yotei Maker Spec

## Overview

Users can place events on a week-long grid (horizontal but could allow for vertical later), style the grid or events, and export the result as an image. Schedules can be saved locally as JSON or exported as PNG (maybe more later), or shared in the form of a link. This project is not intended to have any server interaction, everything will just be client-side, no accounts, no subscriptions, just a local client-side application. The main intention behind this schedule maker is for me (a university student) to be able to make schedules in the form I want, but it can be used by anyone.

### Schedule Settings

The schedule will allow users to change a variety of settings, such as what day the week starts on, what days should be visible, what days are considered weekend days, when the schedule should start, when the schedule should end, and if the schedule should use the 12h or 24h time format.

### Groups

Assume a subject has three lectures at the same time on different days, as well as a lab on one day at a different time, then if styling applied to individual events, the lab would have a different colour. Due to this, there will be event groups which contain the styling, which is just the colour for now.

### Events

Users will be able to add events by clicking "Add Event" or by dragging their mouse across their intended time-slot which will pop up the same dialog but with the time fields already filled. Additionally, users will be able to edit events by clicking on them directly or on "Edit Event". Both of the aforementioned functions will show a form containing an option to change the group, change the group's styling, change the name of the group or the name of the event (an unnamed event uses the group name), the day(s) for the event, the start and end times for the event, as well as the optional instructor, location, and description fields; furthermore, there will also be a button to delete events in the event dialog and on the side of the schedule along the add and edit buttons. Lastly, there will be buttons to save or export the schedule in JSON or in the form of an image.

### Colors

- There will be a default palette of colours for users to pick from, and a button for users to pick their own custom colour using a colour square.

### Exporting

- Currently only PNG support is planned, with the following options:
    - Scale (1x, 2x, 3x, 4x)
    - Transparent or solid background (solid background will just be white but this could be changed later)
    - Legend to show the groups (on/off)
    - Yotei-Maker version footer (on/off)
- The title of the schedule will be at the top, and all schedule settings such as the time format, week days, etc will be taken into account, and a footer will be at the bottom to show the version this image was exported in.
- If some text was too long, then it will be truncated with an ellipsis.

### Persistence and Sharing

Local Storage

- The user will be able to have multiple schedules stored in their browser's local storage.
- The current schedule should autosave shortly after any change is done.
- There will be a dialog to open all schedules the user has saved in local storage, as well as when they were last updated, with an option to duplicate them.
- If the local storage is full or disabled, then this should be handled gracefully.

JSON Export/Import

- Export should download as `<title>.json`
- Imports accept either a file or pasted text, but this should be validated and if there are any errors then the user should be told and the current schedule should not change.
- On import, the current schedule will be replaced so there should be a pop-up if the user has changed any settings before the import goes through.
- If a file has an older Yotei-Maker version, then there should be a warning and it should be migrated forward if possible.

Sharing Links

- The JSON should be minified, compressed, and base64url-encoded before being stored in a URL fragment.
    - This will unfortunately lead to links being quite lengthy.
- Opening a link will show the schedule as a copy, to prevent the user's current schedule from being overwritten
- If the encoded link is too long, then a warning should be shown.


