const TodoComponent = {
  width: "300px",
  margin: "30px auto",
  backgroundColor: "#44014C",
  minHeight: "200px",
  boxSizing: "border-box"
};

const Header = {
  padding: "10px 20px",
  textAlign: "center",
  color: "white",
  fontSize: "22px"
};

const MoviesContainer = {
  width: "80vw",
  margin: "auto"
};

const Icon = {
  height: "20px",
  width: "20px",
  margin: "0 12px"
};

const BannerContainer = {
  width: "100vw",
  height: "70vh"
};

const Banner = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100vw",
  height: "70vh",
  color: "white"
};

const BannerText = {
  position: "absolute",
  top: "100px",
  left: "100px",
  width: "30vw",
  height: "70vh",
  zIndex: "3",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column"
};

const BannerTextHeader = {
  fontFamily: "Nervis",
  fontWeight: "900",
  color: "white"
};

const BannerTextParagraph = {
  opacity: "0.7",
  marginTop: "20px"
};

const CenterText = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontFamily: "'Coiny', cursive",
  textTransform: "uppercase"
};

const BannerButton = {
  backgroundColor: "#ff3d63",
  border: "none",
  borderRadius: "3px",
  color: "white",
  padding: "10px 15px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  marginTop: "20px",
  width: "150px"
};

const YellowButton = {
  backgroundColor: "yellow",
  border: "none",
  borderRadius: "3px",
  color: "white",
  padding: "10px 15px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  marginLeft: "20px",
  marginTop: "20px",
  width: "150px"
};

const BannerImage = {
  width: "100vw",
  height: "70vh",
  background:
    "url(https://image.tmdb.org/t/p/original/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg) no-repeat center",
  backgroundSize: "cover",
  color: "white"
};

const MoviePoster = {
  position: "absolute",
  top: "50vh",
  left: "20vw",
  zIndex: "3"
};

const LandingPageBackgroundContainer = {
  width: "100vw",
  height: "100vh"
};

const LandingPageBackground = {
  width: "100vw",
  height: "100vh",
  background:
    "url(https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg) no-repeat center",
  backgroundSize: "cover",
  color: "white"
};

const LandingPageOverlay = {
  top: "0",
  left: "0",
  height: "100vh",
  width: "100%",
  background: "linear-gradient(180deg,transparent 0,rgba(0,0,0,.3) 1%,#030303)",
  position: "absolute"
};

const BannerOverlay = {
  top: "0",
  left: "0",
  height: "70vh",
  width: "100%",
  background: "linear-gradient(180deg,transparent 0,rgba(0,0,0,.3) 1%,#030303)",
  position: "absolute"
};

const Movie = {
  backgroundColor: "black",
  color: "white"
};

const MovieOverlay = {
  top: "0",
  left: "5",
  width: "300px",
  height: "600px",
  background:
    "linear-gradient(180deg,transparent 0,rgba(0,0,0,.3) 50%,#030303)",
  position: "absolute"
};

const MovieImage = {
  zIndex: "-1"
};

const MovieCaption = {
  position: "absolute",
  width: "250px",
  bottom: "10px",
  left: "40px"
};

const MovieRating = {
  color: "yellow"
};

const MovieYear = {
  color: "grey"
};

const ColumnStyle = {
  margin: "20px 0"
};

const MovieInformation = {
  position: "absolute",
  top: "60vh",
  left: "40vw",
  width: "800px",
  margin: "auto"
};

const GreenText = {
  color: "green"
};

export const styles = {
  TodoComponent: TodoComponent,
  Header: Header,
  BannerContainer: BannerContainer,
  Banner: Banner,
  BannerText: BannerText,
  BannerImage: BannerImage,
  BannerOverlay: BannerOverlay,
  Movie: Movie,
  Icon: Icon,
  MoviesContainer: MoviesContainer,
  MovieOverlay: MovieOverlay,
  MovieImage: MovieImage,
  ColumnStyle: ColumnStyle,
  BannerTextHeader: BannerTextHeader,
  BannerTextParagraph: BannerTextParagraph,
  BannerButton: BannerButton,
  MovieCaption: MovieCaption,
  MovieRating: MovieRating,
  MovieYear: MovieYear,
  MovieInformation: MovieInformation,
  YellowButton: YellowButton,
  GreenText: GreenText,
  LandingPageBackground: LandingPageBackground,
  LandingPageBackgroundContainer: LandingPageBackgroundContainer,
  LandingPageOverlay: LandingPageOverlay,
  CenterText: CenterText,
  MoviePoster: MoviePoster
};
