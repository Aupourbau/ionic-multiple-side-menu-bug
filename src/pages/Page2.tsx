import React, { useState } from 'react';

import {
	IonButton,
	IonContent,
	IonMenu,
	IonMenuToggle,
	IonPage,
	IonTitle,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from '@ionic/react';

export const Page2: React.FC = () => {

	const [disabled, setDisabled] = useState<boolean>(false);

	useIonViewWillEnter(() => {
		console.log('Page2 ionViewWillEnter event fired');
		setDisabled(false);
	});

	useIonViewWillLeave(() => {
		console.log('Page2 ionViewWillLeave event fired');
		setDisabled(true);
	});

	return (
		<React.Fragment>
			<IonMenu
				contentId="page2"
				disabled={disabled}
				menuId="page2"
				type="overlay"
				side="end"
			>
				<IonMenuToggle autoHide={false} menu="page2">
					<IonButton>Close Menu 2</IonButton>
				</IonMenuToggle>
				<IonTitle>Content of menu 2</IonTitle>
			</IonMenu>
			<IonPage id="page2">
				<IonContent>
					<IonMenuToggle autoHide={false} menu="page2">
						<IonButton>Open Menu 2</IonButton>
					</IonMenuToggle>
					<IonButton routerLink='/'>Go to Page1</IonButton>
				</IonContent>
			</IonPage>
		</React.Fragment>
	);
}
