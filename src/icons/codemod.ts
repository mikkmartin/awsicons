const fs = require("fs");

fs.readFile(
	"./Arch_Analytics/Arch_32/ArchAmazonKinesisDataStreams32.js",
	"utf-8",
	function (err, data) {
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
		console.log(replaced);
		/*
    fs.writeFile('.//Arch_Analytics/Arch_32/ArchAmazonKinesisDataStreams32.js', data.replace(/ArchAmazonKinesisDataStreams/g, 'ArchAmazonKinesisDataStreams32'), function (err) {
        if (err) throw err;
        console.log('Replaced!');
    }
    */
	}
);
