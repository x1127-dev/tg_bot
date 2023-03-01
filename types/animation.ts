import { PhotoSize } from "./photo_size.ts";

/**
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 *
 * @see https://core.telegram.org/bots/api#animation
 */
export interface Animation {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  readonly file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used
   * to download or reuse the file.
   */
  readonly file_unique_id: string;

  /**
   * Video width as defined by sender
   */
  readonly width: number;

  /**
   * Video height as defined by sender
   */
  readonly height: number;

  /**
   * Duration of the video in seconds as defined by sender
   */
  readonly duration: number;

  /**
   * Animation thumbnail as defined by sender
   */
  readonly thumb?: PhotoSize;

  /**
   * Original animation filename as defined by sender
   */
  readonly file_name?: string;

  /**
   * MIME type of the file as defined by sender
   */
  readonly mime_type?: string;

  /**
   * File size in bytes
   */
  readonly file_size?: number;
}
