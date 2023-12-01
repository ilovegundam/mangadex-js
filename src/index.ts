import HttpClient, { HttpClientOptions } from "./http";
import ApiClientResource from "./resources/ApiClient";
import AtHomeResource from "./resources/AtHome";
import AuthenticationResource from "./resources/Authentication";
import AuthorResource from "./resources/Author";
import ChapterResource from "./resources/Chapter";
import CoverResource from "./resources/Cover";
import CustomListResource from "./resources/CustomList";
import FeedResource from "./resources/Feed";
import FollowsResource from "./resources/Follows";
import ForumsResource from "./resources/Forums";
import InfrastructureResource from "./resources/Infrastructure";
import LegacyResource from "./resources/Legacy";
import MangaResource from "./resources/Manga";
import RatingResource from "./resources/Rating";
import ReadMarkerResource from "./resources/ReadMarker";
import ReportResource from "./resources/Report";
import ScanlationGroupResource from "./resources/ScanlationGroup";
import SettingsResource from "./resources/Settings";
import StatisticsResource from "./resources/Statistics";
import UploadResource from "./resources/Upload";
import UserResource from "./resources/User";

export default class MangaDex {
  http: HttpClient;
  ApiClient: ApiClientResource;
  AtHome: AtHomeResource;
  Author: AuthorResource;
  Chapter: ChapterResource;
  Cover: CoverResource;
  Authentication: AuthenticationResource;
  CustomList: CustomListResource;
  Feed: FeedResource;
  Follows: FollowsResource;
  Forums: ForumsResource;
  Infrastructure: InfrastructureResource;
  Legacy: LegacyResource;
  Manga: MangaResource;
  Rating: RatingResource;
  ReadMarker: ReadMarkerResource;
  Report: ReportResource;
  ScanlationGroup: ScanlationGroupResource;
  Settings: SettingsResource;
  Statistics: StatisticsResource;
  Upload: UploadResource;
  User: UserResource;

  constructor(options?: HttpClientOptions) {
    this.http = new HttpClient(options);
    this.ApiClient = new ApiClientResource(this.http);
    this.AtHome = new AtHomeResource(this.http);
    this.Author = new AuthorResource(this.http);
    this.Chapter = new ChapterResource(this.http);
    this.Cover = new CoverResource(this.http);
    this.Authentication = new AuthenticationResource(this.http);
    this.CustomList = new CustomListResource(this.http);
    this.Feed = new FeedResource(this.http);
    this.Follows = new FollowsResource(this.http);
    this.Forums = new ForumsResource(this.http);
    this.Infrastructure = new InfrastructureResource(this.http);
    this.Legacy = new LegacyResource(this.http);
    this.Manga = new MangaResource(this.http);
    this.Rating = new RatingResource(this.http);
    this.ReadMarker = new ReadMarkerResource(this.http);
    this.Report = new ReportResource(this.http);
    this.ScanlationGroup = new ScanlationGroupResource(this.http);
    this.Settings = new SettingsResource(this.http);
    this.Statistics = new StatisticsResource(this.http);
    this.Upload = new UploadResource(this.http);
    this.User = new UserResource(this.http);
  }

  setAccessToken(token: string) {
    this.http.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  getAccessToken(): string | undefined {
    return this.http.axios.defaults.headers.common["Authorization"]
      ?.toString()
      .replace("Bearer ", "");
  }
}
