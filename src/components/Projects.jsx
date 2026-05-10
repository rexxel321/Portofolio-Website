import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import aiChatbotImg from '../assets/ai chatbot.jpeg'
import volunterImg from '../assets/volunter.png'
import emotiCareImg from '../assets/emoticare1.png'
import ecommerceImg from '../assets/ecommerce(1).png'
import elearningImg from '../assets/elearning4.png'
import elearningImg1 from '../assets/Lumina Ai.png'
import './Projects.css'

const techIcons = {
  React: { color: '#61DAFB', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.096-.278z"/></svg>' },
  Python: { color: '#3776AB', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.969S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.22 1.867c.578 0 1.047.47 1.047 1.05 0 .578-.47 1.047-1.048 1.047a1.048 1.048 0 0 1 0-2.097zM12.086 24c6.096 0 5.716-2.656 5.716-2.656l-.007-2.752h-5.814v-.826h8.052S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.402-3.35 3.402H9.451s-3.24-.052-3.24 3.13V20.87S5.72 24 12.086 24zm3.22-1.867a1.048 1.048 0 1 1 0-2.097 1.048 1.048 0 0 1 0 2.097z"/></svg>' },
  'Node.js': { color: '#339933', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.998 24c-.321 0-.641-.084-.924-.251L8.29 22.16c-.44-.244-.223-.33-.08-.38.462-.16.555-.197 1.047-.476.052-.03.118-.018.17.013l2.19 1.3a.3.3 0 0 0 .267 0l8.55-4.934a.273.273 0 0 0 .131-.234V6.55a.277.277 0 0 0-.133-.238L12.063 1.38a.27.27 0 0 0-.268 0L3.246 6.313a.275.275 0 0 0-.134.238v9.866c0 .098.052.19.134.234l2.342 1.352c1.27.636 2.047-.113 2.047-.866V7.23c0-.138.11-.246.248-.246h1.082c.136 0 .247.108.247.246v9.906c0 1.695-.923 2.666-2.533 2.666-.495 0-.885 0-1.968-.535L2.4 17.964A1.857 1.857 0 0 1 1.478 16.36V6.551c0-.661.352-1.28.923-1.608L10.95.41a1.918 1.918 0 0 1 1.9 0l8.55 4.533c.57.329.92.947.92 1.608v9.809c0 .66-.35 1.279-.92 1.608l-8.55 4.933a1.857 1.857 0 0 1-.924.251zm2.71-6.84c-3.819 0-4.618-1.752-4.618-3.22 0-.137.11-.247.248-.247h1.103c.123 0 .226.088.245.21.168 1.132.666 1.703 2.934 1.703 1.806 0 2.574-.408 2.574-1.366 0-.553-.218-.962-3.023-1.237-2.345-.232-3.795-.75-3.795-2.622 0-1.727 1.456-2.756 3.896-2.756 2.742 0 4.1.95 4.272 2.996a.249.249 0 0 1-.247.272h-1.108a.245.245 0 0 1-.24-.202c-.268-1.186-.918-1.566-2.677-1.566-1.97 0-2.2.687-2.2 1.202 0 .623.272.805 2.93 1.157 2.633.349 3.889.843 3.889 2.688 0 1.864-1.554 2.935-4.267 2.935z"/></svg>' },
  Flutter: { color: '#02569B', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>' },
  TensorFlow: { color: '#FF6F00', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-6.168-3.564v9.02l-4.096 2.378V0l10.248 5.856.016 5.311z"/></svg>' },
  'Next.js': { color: '#000000', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z"/></svg>' },
  Firebase: { color: '#FFCA28', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/></svg>' },
  TypeScript: { color: '#3178C6', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>' },
  Dart: { color: '#0175C2', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948V14.7l-3.158 3.158-8.895-3.947-3.263 3.895-4.58-4.58L4.105 4.105zm2.842 2.842l5.053 5.053 3.158-3.158-5.053-5.053-3.158 3.158zM22.105 14.7l-1.579 1.58-3.947-3.948 1.579-1.579L22.105 14.7z"/></svg>' },
  'YOLOv11': { color: '#00FFFF', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' },
  Groq: { color: '#F55036', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.54 0 4.894-.79 6.835-2.138l-3.665-3.666A6.26 6.26 0 0 1 12 18.26c-3.453 0-6.26-2.807-6.26-6.26S8.547 5.74 12 5.74s6.26 2.807 6.26 6.26v1.87a1.87 1.87 0 0 1-3.74 0V12A2.52 2.52 0 1 0 12 14.52a2.5 2.5 0 0 0 1.607-.588 3.598 3.598 0 0 0 3.133 1.808A3.61 3.61 0 0 0 20 12.13V12c0-4.418-3.582-8-8-8z"/></svg>' },
  OpenAI: { color: '#412991', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/></svg>' },
  HTML: { color: '#E34F26', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.07-.999.09-.993H6.297l.697 7.767h7.737l-.366 3.877-2.397.663-2.369-.665-.163-1.872H7.28l.276 3.453 4.42 1.232 4.445-1.236.678-7.512H8.53z"/></svg>' },
  CSS: { color: '#1572B6', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716H6.26l.264 2.251h8.777l-.42 4.248-2.864.802-2.916-.776-.184-2.051H6.781l.32 4.449 4.906 1.355 4.885-1.354.588-6.512 .064-.85.232-2.62.064-.85z"/></svg>' },
  JavaScript: { color: '#F7DF1E', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179z"/></svg>' },
  TailwindCSS: { color: '#06B6D4', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>' },
  Appwrite: { color: '#FD366E', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-.6 5.1h1.2v7.5h3.9v1.2H11.4V5.1zm-4.8 4.8h1.2v3.9h2.7v1.2H6.6V9.9z"/></svg>' },
  Supabase: { color: '#3ECF8E', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.04.058a.46.46 0 0 0 .385.724H12v9.396a.396.396 0 0 0 .716.232l9.08-12.261l.04-.058a.46.46 0 0 0-.385-.724z"/></svg>' },
  Gemini: { color: '#8E75B2', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 10.5L13.5 9.5L12 0L10.5 9.5L0.5 10.5L10.5 11.5L12 21L13.5 11.5L23.5 10.5Z"/></svg>' },
  Flask: { color: '#000000', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.878.392a.75.75 0 0 0-.756 0l-5.25 3a.75.75 0 0 0 .756 1.298L8.5 2.193l4.872 2.497a.75.75 0 0 0 .756-1.298ZM14.5 9.5h-5v10h5v-10Zm1.5 0v10a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 19.5v-10A1.5 1.5 0 0 1 9.5 8h5A1.5 1.5 0 0 1 16 9.5ZM8.5 0a.75.75 0 0 1 .378.102L14.5 3.25 20.122.102a.75.75 0 1 1 .756 1.298L15.25 4.25v1.5a.75.75 0 0 1-1.5 0v-1.5L8.122 1.4A.75.75 0 0 1 8.5 0Z"/></svg>' },
  OpenCV: { color: '#5C3EE8', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>' },
  MySQL: { color: '#4479A1', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.19.256.243l.09.014-.09.014c-.193.074-.315.228-.322.39.43.17.817-.067.87-.33.037-.174-.07-.35-.325-.363zm-8.29 0c-.255.013-.36.189-.324.363.053.263.44.5.873.33-.007-.162-.13-.316-.323-.39l-.09-.014.09-.014c.11-.053.202-.139.256-.243h.014v-.013a1.23 1.23 0 0 0-.273-.033l-.223.014zM23.07 15.76c-.055 1.396-.505 2.338-1.4 3.053-.856.685-2.044 1.036-3.512 1.036-1.536 0-2.744-.373-3.593-1.147-.85-.775-1.295-1.92-1.337-3.384V9.8l.007-1.007c.035-.55.065-1.046.086-1.384.02-.34.035-.602.048-.786.013-.185.021-.314.021-.384 0-1.007-.054-1.678-.177-2.008-.117-.329-.315-.497-.582-.497-.227 0-.42.126-.574.379-.15.252-.225.647-.225 1.179 0 .317.015.65.048.998l.021.313c0 .31.008.586.021.826.014.24.027.454.04.64.014.186.02.34.02.464v6.33l.007.38c.007.303.02.57.034.806.014.234.034.45.062.647.027.196.063.367.107.51.043.143.098.265.161.368.064.103.141.19.233.259.091.068.2.124.324.167.124.043.27.067.44.067.2 0 .377-.03.528-.09.152-.061.284-.152.395-.272.11-.12.198-.27.265-.45.067-.18.112-.392.135-.636l.021-.35V9.8c0-.31.014-.555.044-.735.03-.179.083-.306.162-.38.078-.074.193-.111.344-.111.18 0 .312.05.396.152.083.1.135.261.151.48.016.218.027.528.027.929v5.8c-.006.336-.02.627-.04.87-.021.244-.055.456-.104.636-.049.18-.113.335-.19.464a1.29 1.29 0 0 1-.285.325c-.115.09-.25.163-.407.22-.156.058-.34.086-.55.086-.2 0-.379-.03-.536-.088a1.22 1.22 0 0 1-.402-.253 1.567 1.567 0 0 1-.298-.412 2.387 2.387 0 0 1-.18-.568 4.27 4.27 0 0 1-.058-.72v-7.04c0-.503.055-.882.163-1.14.108-.26.27-.388.484-.388.173 0 .312.073.417.22.104.147.166.382.184.705l.007.324v7.26c0 .262.023.482.07.658.047.177.126.317.237.422.11.104.256.18.437.228.18.048.403.072.666.072.5 0 .88-.132 1.138-.397.258-.265.412-.68.462-1.247l.02-.433V5.776c0-.388-.02-.726-.059-1.014-.04-.288-.107-.538-.204-.752a1.548 1.548 0 0 0-.37-.53 1.6 1.6 0 0 0-.562-.32c-.22-.074-.477-.111-.773-.111-.47 0-.877.11-1.216.327-.34.218-.61.55-.812.998-.202.448-.318.998-.348 1.648l-.007.376V16.1c0 .523.044.966.131 1.33.088.363.226.662.415.896.188.234.429.41.72.524.292.115.645.172 1.058.172.42 0 .784-.064 1.09-.192.307-.129.56-.33.759-.606.198-.276.339-.624.423-1.044.083-.42.125-.92.125-1.497V9.8c0-.31.014-.555.044-.735.03-.179.083-.306.162-.38.078-.074.193-.111.344-.111.18 0 .312.05.396.152.083.1.135.261.151.48.016.218.027.528.027.929z"/></svg>' },
  NumPy: { color: '#013243', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.085 0L5.17 3.106v12.211l5.915 3.107 5.914-3.107V3.106Zm.827 1.662 4.26 2.238v10.44l-4.26-2.239Zm-1.655 0v10.44l-4.26 2.238V3.9ZM4.343 14.362l-.002.001v3.53L8.6 20.131v-3.532Zm15.314 0-4.258 2.237v3.533l4.258-2.238ZM9.43 16.98v3.532l2.482 1.304 2.481-1.304V16.98l-2.48 1.303Z"/></svg>' },
  PyTorch: { color: '#EE4C2C', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.005 0L4.952 7.053a9.865 9.865 0 0 0 0 13.992 9.866 9.866 0 0 0 13.99 0 9.865 9.865 0 0 0 0-13.992l-1.949 1.949a7.18 7.18 0 0 1 0 10.175 7.148 7.148 0 0 1-10.147 0 7.18 7.18 0 0 1 0-10.175l4.653-4.629.506-.373zM15.73 3.47a1.324 1.324 0 1 0 0 2.648 1.324 1.324 0 0 0 0-2.648z"/></svg>' },
  GFPGAN: { color: '#7C3AED', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>' },
  'Real-ESRGAN': { color: '#059669', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3v18h18V3zm-2 16H5V5h14v14zm-7-2l-4-4 1.41-1.41L12 14.17l6.59-6.58L20 9l-8 8z"/></svg>' },
  'LaMa': { color: '#D97706', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V15h-2v1.93A8 8 0 0 1 4.07 13H6v-2H4.07A8 8 0 0 1 11 4.07V6h2V4.07A8 8 0 0 1 19.93 11H18v2h1.93A8 8 0 0 1 13 16.93z"/></svg>' },
  rembg: { color: '#0EA5E9', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14v14zm-5.5-7A2.5 2.5 0 0 1 11 9.5 2.5 2.5 0 0 1 8.5 12 2.5 2.5 0 0 1 11 14.5a2.5 2.5 0 0 1 2.5-2.5z"/></svg>' },
}

const projects = [
  {
    emoji: '🧠',
    image: aiChatbotImg,
    bg: '#fef3ec',
    tag: 'AI',
    title: 'FitBuddy',
    desc: 'Web-based fitness assistant chatbot application using a Hybrid NLP architecture.',
    detail: 'FitBuddy is a web-based fitness assistant chatbot application that uses a Hybrid NLP architecture. This application combines a rule-based system to instantly respond to simple calculations such as BMI and calorie counts, as well as relying on a Generative AI Model to answer more complex fitness questions. The application is equipped with authentication features, chat history storage, the ability to summarize conversation sessions, and options for users to switch between using Llama 3 or Gemini AI.',
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Supabase', 'Groq', 'Gemini', 'Python'],
  },
  {
    emoji: '🌐',
    image: volunterImg,
    bg: '#eef3fe',
    tag: 'Web',
    title: 'Volunteer',
    desc: 'Building a volunteer website for humanitarian activities.',
    detail: 'A full-stack volunteer management platform connecting volunteers with humanitarian organizations. Features include event registration, volunteer hour tracking, impact dashboards, and real-time notifications for upcoming community service opportunities.',
    techStack: ['React', 'Node.js', 'TypeScript', 'CSS'],
  },
  {
    emoji: '📱',
    image: ecommerceImg,
    bg: '#f0feee',
    tag: 'Mobile',
    title: 'E-commerce App',
    desc: 'Mobile application for e-commerce with a seamless shopping experience.',
    detail: 'A cross-platform mobile e-commerce application built with Flutter. Features include product browsing with advanced filters, shopping cart management, secure payment integration, order tracking, and push notifications for deals and delivery updates.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
  },
  {
    emoji: '🔮',
    image: emotiCareImg,
    bg: '#fdf4ff',
    tag: 'AI',
    title: 'EmotiCare Image Recognition',
    desc: 'Deeplearning project using Yolov11 for mood detection.',
    detail: 'EmotiCare is an AI-based web application for emotion detection and real-time evaluation of users stress levels. This application combines three analysis methods: facial expression detection via camera using deep learning models, analysis of users narrative texts to detect sentiment and stress themes, and self-assessment questionnaires. The results of these three methods are combined through a Decision Support System (DSS) to determine the users stress level and provide recommendations for management.',
    techStack: ['Python', 'Flask', 'TensorFlow', 'OpenCV', 'MySQL', 'NumPy', 'HTML'],
  },
  {
    emoji: '📊',
    image: elearningImg,
    bg: '#fff8ee',
    tag: 'Web',
    title: 'E-Learning',
    desc: 'Gamified e-learning application with a volcano theme for elementary school students with a smart AI tutor.',
    detail: 'E-Learning Mission Volcano is a gamification-based educational web application designed for elementary school students. This application turns the learning process into an interactive volcano-themed adventure, where students complete materials and exams gradually through the Floor & Node Progression system. Built using Next.js, React, TypeScript, TailwindCSS, and Appwrite as the backend, it is also integrated with Groq AI for smart tutor features.',
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Appwrite', 'Groq'],
  },
  {
    emoji: '🎓',
    image: elearningImg1,
    bg: '#eef9ff',
    tag: 'AI',
    title: 'Lumina AI',
    desc: 'AI-powered web app for automatic image enhancement and manipulation.',
    detail: 'Lumina AI is a web-based image processing application powered by artificial intelligence that allows users to manipulate and enhance image quality automatically. The application provides five main features: background removal, face enhancement (beautify), color correction, object removal, and artistic style transfer. Built using Python and Flask as the backend, the application integrates various AI models such as GFPGAN, Real-ESRGAN, LaMa Cleaner, and TensorFlow Hub to produce high-quality image outputs directly through the browser.',
    techStack: ['Python', 'Flask', 'PyTorch', 'TensorFlow', 'OpenCV', 'GFPGAN', 'Real-ESRGAN', 'LaMa', 'rembg', 'HTML', 'CSS', 'JavaScript'],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const gridRef = useScrollReveal()
  const headerRef = useScrollReveal()

  return (
    <section id="projects" className="projects">
      <div className="projects-header reveal-bottom" ref={headerRef}>
        <div className="section-tag">My Work</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          A selection of projects I've built — from AI-powered tools to full-stack
          applications.
        </p>
      </div>

      <div className="projects-grid reveal-bottom" ref={gridRef}>
        {projects.map((p) => (
          <div
            className="project-card"
            key={p.title}
            onClick={() => setSelectedProject(p)}
          >
            <div className="project-thumb" style={{ background: p.bg }}>
              {p.image ? (
                <img src={p.image} alt={p.title} className="project-img" />
              ) : (
                <span>{p.emoji}</span>
              )}
            </div>
            <div className="project-info">
              <div className="project-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="modal-image" style={{ background: selectedProject.bg }}>
              {selectedProject.image ? (
                <img src={selectedProject.image} alt={selectedProject.title} />
              ) : (
                <span className="modal-emoji">{selectedProject.emoji}</span>
              )}
            </div>

            <div className="modal-body">
              <div className="project-tag">{selectedProject.tag}</div>
              <h2>{selectedProject.title}</h2>
              <p className="modal-detail">{selectedProject.detail}</p>

              <div className="modal-techstack">
                <h4>Tech Stack</h4>
                <div className="techstack-icons">
                  {selectedProject.techStack.map((tech) => {
                    const icon = techIcons[tech]
                    if (!icon) return null
                    return (
                      <div className="techstack-chip" key={tech}>
                        <span
                          className="techstack-svg"
                          style={{ color: icon.color }}
                          dangerouslySetInnerHTML={{ __html: icon.svg }}
                        />
                        <span className="techstack-name">{tech}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
