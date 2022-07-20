/**
 * @name GooseModThetherlessInjector
 * @author WmeLuna
 * @description injects GooseMod Tetherlessly.
 * @version 0.0.1
 * @invite inviteCode
 * @authorId 865632950443835392
 * @authorLink https://twitter.com/Whoever
 * @donate https://paypal.me/
 * @patreon https://patreon.com/
 * @website https://github.com/rauenzi/BetterDiscordApp
 * @source https://gist.github.com/rauenzi/e5f4d02fc3085a53872b0236cd6f8225
 */

module.exports = class GooseModThetherlessInjector {
    load() {
        /*
        function getLocalStoragePropertyDescriptor() {
            const frame = document.createElement('frame');
            frame.src = 'about:blank';
          
            document.body.appendChild(frame);
          
            let r = Object.getOwnPropertyDescriptor(frame.contentWindow, 'localStorage');
          
            frame.remove();
          
            return r;
          }
          
          
        Object.defineProperty(window, 'localStorage', getLocalStoragePropertyDescriptor());
        */
    } // Optional function. Called when the plugin is loaded in to memory

    start() {
        (async function() {
            const js = await (await fetch('https://raw.githubusercontent.com/GooseMod/GooseMod/dist-dev/index.js')).text();
            const scr = document.createElement('script');
            scr.appendChild(document.createTextNode(js));
            document.body.appendChild(scr);
        }).bind({})();
        //import('https://raw.githubusercontent.com/GooseMod/GooseMod/dist-dev/index.js')
    } // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}