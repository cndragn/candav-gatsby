import React from 'react';
import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';

import '../../css/resume.css';

const styles = StyleSheet.create({
	page: {
		padding: 30
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		'@media max-width: 400': {
			flexDirection: 'column'
		}
	}
});

const Resume = (props) => (
	<Page {...props} style={styles.page}>
		<Text>Resume Header</Text>
		<View style={styles.container}>
			<Text>My Experience</Text>
		</View>
	</Page>
);

const MyDoc = () => (
	<Document author="Candice Davidson" title="Candice Davidson Resume">
		<Resume size="A4" />
	</Document>
);

export default MyDoc;
