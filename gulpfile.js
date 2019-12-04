const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer');

const styles = () => (
    src('scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('css'))
);

watch('scss/main.scss', styles)

exports.default = styles;