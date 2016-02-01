Extended Transcript UI
====

An open source gui built in angular that displays standardized transcripts.

![extended transcript preview](https://raw.githubusercontent.com/learningobjectsinc/extended-transcript-ui/master/preview.png)

Using
====
An example of this interface can be viewed at: https://demo-cbl.difference-engine.com/extended-transcript/

If you'd like you see how your own rop file would look in this interface, just paste a url to the json-ld document into the "Url to transcript" input box (Make sure that it's accessible with appropriate [cors headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)).

Developing
====

To run this locally, check out this repository by cloning:

    git clone git@github.com:learningobjectsinc/extended-transcript-ui.git
    cd extended-transcript-ui/

Install dependencies & run the app:

    npm install
    grunt serve

You should now be able to open your browser and navigate to http://localhost:9000/ to see the interface.

The webpack build should be open and waiting for changes. Change the information located in the `rop.json` file, refresh your browser and you can see the changes.
