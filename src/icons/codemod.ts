import { findLastKey } from "lodash";

const fs = require("fs");
var path = require("path");
var walk = function (dir, done) {
	var results = [];
	fs.readdir(dir, function (err, list) {
		if (err) return done(err);
		var pending = list.length;
		if (!pending) return done(null, results);
		list.forEach(function (file) {
			file = path.resolve(dir, file);
			fs.stat(file, function (err, stat) {
				if (stat && stat.isDirectory()) {
					walk(file, function (err, res) {
						results = results.concat(res);
						if (!--pending) done(null, results);
					});
				} else {
					results.push(file);
					if (!--pending) done(null, results);
				}
			});
		});
	});
};

walk("./", (_, paths) => {
	paths.forEach((path, i) => {
		if (path.endsWith(".js") && !path.includes("index.js") && i < 10) overWrite(path);
	});
});

const overWrite = (path) => {
	fs.readFile(path, "utf-8", function (err, data) {
		if (err) throw err;
		//find the svg group with <g fill="none" fillRule="evenodd">
		const grouptagIndexes = {
			start: data.indexOf('<g fill="none" fillRule="evenodd">'),
			end: data.indexOf("</g>") + 4,
		};
		const group = data.substring(grouptagIndexes.start, grouptagIndexes.end);
		const backgroundIndexes = {
			start: group.indexOf("<path"),
			end: group.indexOf("/>") + 3,
		};
		const background = group.substring(
			backgroundIndexes.start,
			backgroundIndexes.end
		);
		const fillIndexes = {
			start: background.indexOf('fill="'),
			end: background.indexOf(')"') + 2,
		};
		const fillAttr = background.substring(fillIndexes.start, fillIndexes.end);
		const propsIndexes = {
			start: data.indexOf("{...props}"),
			end: data.indexOf("{...props}") + 10,
		};
		const props = data.substring(propsIndexes.start, propsIndexes.end);
		const replaced = data
			.replace(props, 'viewBox="0 0 40 40"')
			.replace(background, "")
			.replace('fill="#FFF"', fillAttr);
		fs.writeFile(path, replaced, function (err) {
			if (err) throw err;
		});
	});
};
