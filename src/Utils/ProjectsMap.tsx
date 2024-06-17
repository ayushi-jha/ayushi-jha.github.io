import android_img from '../assets/NewsAndroid.jpg';
import datascience_img from '../assets/datascience.png';
import react_editor_img from '../assets/ReactEditor.png';
import react_news_img from '../assets/ReactNewsApp.png';
import flask_img from '../assets/NewsFlask.jpg';

export const projectsMap = [
    {
       "title": "Android News App",
       "img_src": android_img,
       "description": "Made using Bing Autosuggest API, Guardian API",
       "skills": ["android", "java"],
       "a_href": "https://github.com/ayushi-jha/AndroidNewsApp"
    },
    {
       "title": "Interesting Data",
       "img_src": datascience_img,
       "description": "Data Science Visualizations using python libraries matplotlib, pandas, seaborn",
       "skills": ["python"],
       "a_href": "https://github.com/ayushi-jha/Data-Science"
    },
    {
       "title": "React News Website",
       "img_src": react_news_img,
       "description": "Made using Express, Bing Autosuggest API, Guardian API, NYTimes API",
       "skills": ["react", "node"],
       "a_href": "https://github.com/ayushi-jha/NodeReactNewsApp"
    },
    {
       "title": "Online Text Editor",
       "img_src": react_editor_img,
       "description": "Rich text editor made using Draft.js",
       "skills": ["react"],
       "a_href": "https://ayushi-jha.github.io/Rich_text-Editor/"
    },
    {
       "title": "Flask News Website",
       "img_src": flask_img,
       "description": "Made using Flask, newsapi.",
       "skills": ["html", "css"],
       "a_href": "https://github.com/ayushi-jha/FlaskNewsApp"
    }
 ];