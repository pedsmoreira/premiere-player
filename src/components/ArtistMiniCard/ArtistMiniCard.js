// @flow

import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";

import Artist from "models/Artist";
import ArtistCover from "components/ArtistCover";

import "./ArtistMiniCard.scss";

type Props = {
  artist: Artist
};

@observer
export default class ArtistMiniCard extends React.Component<Props> {
  render() {
    const artist = this.props.artist;
    const url = `/artists/${artist.slug}`;

    return (
      <Link to={url} className="ArtistMiniCard card mini-card">
        <ArtistCover artist={artist} className="mini-card-image" />
        <div className="mini-card-name">{artist.name}</div>
      </Link>
    );
  }
}
