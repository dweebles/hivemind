HiveMind
========

Take and share notes in a unique way.

License
-------

This still has to be discussed, but consider everything to be under
the MIT license until further notice.

Authors
-------

-   David Gay <oddshocks at gmail dot com>

-   Duy Nguyen <sleepynguyener at gmail dot com>

-   Marc Brigham <mpb8676 at rit dot edu>

Hacking
-------

Contributions will be rejected until the completion of the course.
This must be our own work for now.

Marc, Duy, and I (oddshocks) all have commit access to the
oddshocks/hivemind repo on GitHub.

Operation
---------

This section will be used to contain ideas related to the design of the
actual notetaking/sharing functionality of the application.

The app will initially give the user three main functionalities:

1.  Take notes. Notes can be added to a specific "hive".

2.  View notes. Notes can be read and shared with other users.

3.  Join a hive. All notes taken for a hive are shared with all
    hive members. Users can also leave and create hives. Hives can be
    password protected. Hives have a creator who can never be kicked
    from a hive and has the sole power to destroy the hive. Creators
    can make hive members moderators, giving them some administrative
    powers.

Users will be able to create an account to store their notes, hives,
and settings, or they can log in with a popular social networking site,
such as Twitter or Facebook.

Notes
*****

Users can create notes in a hive or external to a hive (by themselves
or with other users). Notes consist of two parts:

1.  The notes themselves. This is all of the note content. Notes can
    be taken in plain text, HTML, restructured text, or markdown.
    Syntax hilighting based on the user-declared format provides some
    useful colorations.

2.  Tags. A note's tags are compared to the tags of other notes in the
    hive, and HiveMind asks the user if they would like to link notes
    with ones that appear to be related. Note content may also be taken
    into consideration (similar keywords appearing often in each note,
    etc). Notes linked with each other are displayed near each other,
    though are distinctified from each other. Content from linked notes
    can be manually merged together to form a single note of content
    on the same topic. It is possible that all notes may be eventually
    merged into one note representing the content of a single lecture,
    for example.

Notes can be exported from HiveMind in various open formats, such
as plain text and HTML. HiveMind can send exported data away in an email
for you, if you like.

Zen Mode
********

When the app is in "notetaking mode", all user interface elements are
stripped from the screen, except for a keyboard. An off-white background
is presented with a cursor, and the user can enter notes. This interface
can be customized (changing colour of background/font/cursor, changing sizes
of the same, etc.). A small tug up or down reveals key interface buttons which
allow you to interact with HiveMind without leaving your notes. When typing,
this menu is completely hidden. Again, only a blank sheet and your cursor
remain. The option to show/hide your phone's status bar will be provided.

Glossary
********

note
    content written in plain text, HTML, RST, or markdown

hive
    a collection of notes made by multiple users

tag
    categorizing note metadata used to determine related notes in a hive
