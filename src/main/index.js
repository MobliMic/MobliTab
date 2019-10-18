import React from 'react';

export const MainView = () => {
  return (
    <React.Fragment>
      <section class="block" id="favorites">
        <div class="innerContent">
          <h3>Favorites</h3>

          <ul class="linkList">
            <li class="linkListItem">
              <a href="https://www.facebook.com/">
                Facebook</a>
            </li>

            <li class="linkListItem">
              <a href="http://crunchyroll.com">
                Crunchyroll</a>
            </li>

            <li class="linkListItem">
              <a href="http://myanimelist.net/">
                My Anime List</a>
            </li>

            <li class="linkListItem">
              <a href="https://mail.google.com/">
                Mail</a>
            </li>

            <li class="linkListItem">
              <a href="https://calendar.google.com">
                Calendar</a>
            </li>

            <li class="linkListItem">
              <a href="https://drive.google.com">
                Google Drive</a>
            </li>

            <li class="linkListItem">
              <a href="https://github.com/">
                Github</a>
            </li>

            <li class="linkListItem">
              <a href="http://www.amazon.co.uk/">
                Amazon</a>
            </li>

          </ul>
        </div>
      </section>
      <section class="block" id="recent">
        <div class="innerContent">
          <h3>Recently Visited</h3>
          <ul class="linkList" id="recentList">
          </ul>
        </div>
      </section>

      <section class="block" id="bookmarks">
        <div class="innerContent">
          <h3>Bookmarks</h3>
          <ul class="linkList" id="bookmarkList">
          </ul>
        </div>
      </section>

    </React.Fragment>
  );
};
