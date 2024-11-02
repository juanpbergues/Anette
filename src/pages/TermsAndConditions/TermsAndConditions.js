/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@mui/material';

import './terms-and-conditions.scss';

const TermsAndConditions = ({matches, fullScreen}) => {
  const getDefaultClassName = () => {
    if (matches) {
      return 'terms-and-conditions-mobile';
    }
    if (fullScreen) {
      return 'terms-and-conditions-full-screen';
    }
    return 'terms-and-conditions';
  };

  const defaultClassName = getDefaultClassName();
  return (
    <>
      {matches ? (
        <section className={defaultClassName}>
          <Typography
            color="secondary"
            variant="h5"
            sx={{
              marginTop: '20px',
              marginBottom: '30px',
              fontFamily: 'Chequersdemo',
              fontSize: '26px',
            }}
          >
            TERMINOS Y CONDICIONES
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonBold',
              fontSize: '16px',
              marginBottom: '8px',
            }}
          >
            INTRODUCCIÓN
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonRegular',
              fontSize: '16px',
              marginBottom: '16px',
            }}
          >
            Bienvenido al sitio web de ANNETE. Por favor, lea las siguientes reglas básicas que rigen el uso de ANNETE ONLINE (en adelante, las &quot;Reglas&quot;).
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonBold',
              fontSize: '16px',
              marginBottom: '8px',
            }}
          >
            USO DEL WEBSITE
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonRegular',
              fontSize: '16px',
              marginBottom: '16px',
            }}
          >
            Mediante el uso del Website el Usuario acepta las Reglas, y declara bajo juramento tener 18 años de edad o más. Si usted es menor de 18 años de edad deberá abstenerse de usar el Website. Los padres, tutores o responsables de los menores de 18 años que utilicen el Website son plena y exclusivamente responsables por el uso del Website por parte de éstos.
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonBold',
              fontSize: '16px',
              marginBottom: '8px',
            }}
          >
            DERECHOS DE MARCA, PUBLICIDAD Y PROPIEDAD INTELECTUAL
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonRegular',
              fontSize: '16px',
              marginBottom: '16px',
            }}
          >
            Todos los elementos, incluidas las imágenes, textos, ilustraciones, íconos, logo e isotipos, fotografías, programas, animaciones, cualquier música, melodía, video clip y cualquier otro elemento que forma parte del Website sólo tiene como destino la comercialización de productos por parte de ANNETE y se encuentra prohibida cualquier reproducción, modificación o distribución de los mismos. Todos los comentarios, sugerencias o ideas suministradas por el Usuario serán propiedad de ANNETE.
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonBold',
              fontSize: '16px',
              marginBottom: '8px',
            }}
          >
            MODIFICACIONES AL SERVICIO Y PRECIOS
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonRegular',
              fontSize: '16px',
              marginBottom: '16px',
            }}
          >
            Nos reservamos el derecho de actualizar, cambiar o reemplazar cualquier parte de estos Términos de Servicio mediante la publicación de actualizaciones y/o cambios en nuestro sitio web. Es su responsabilidad revisar esta página periódicamente para conocer los cambios. El uso continuado de nuestro sitio web después de la publicación de cualquier cambio constituye la aceptación de dichos cambios.
            <br></br>
            <br></br>
            Los precios de nuestros productos están sujetos a cambios sin previo aviso.<br></br>
            Nos reservamos el derecho en cualquier momento de modificar o discontinuar el Servicio (o cualquier parte o contenido del mismo) sin previo aviso en cualquier momento.<br></br>
            No seremos responsables ante usted ni ante terceros por ninguna modificación, cambio de precio, suspensión o descontinuación del Servicio.
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonBold',
              fontSize: '16px',
              marginBottom: '8px',
            }}
          >
            USOS PROHIBIDOS
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonRegular',
              fontSize: '16px',
              marginBottom: '16px',
            }}
          >
            Se le prohíbe utilizar el sitio o su contenido: (a) para cualquier propósito ilegal; (b) para solicitar a otros que realicen o participen en actos ilícitos; (c) para violar cualquier regulación, reglas, leyes, o ordenanzas locales, internacionales, federales, provinciales o estatales; (d) para infringir o violar nuestros derechos de propiedad intelectual o los derechos de propiedad intelectual de otros; (e) para acosar, abusar, insultar, dañar, difamar, calumniar, menospreciar, intimidar o discriminar por motivos de género, orientación sexual, religión, etnia, raza, edad, origen nacional o discapacidad; (f) para presentar información falsa o engañosa; (g) para cargar o transmitir virus o cualquier otro tipo de código malicioso que será o podría ser utilizado de cualquier manera que afecte la funcionalidad o el funcionamiento del Servicio o de cualquier sitio web relacionado, otros sitios web o Internet; (h) para recopilar o rastrear la información personal de otros; (i) para enviar spam, pescar, pharm, pretext, araña, rastrear o raspar; (j) con cualquier propósito obsceno o inmoral; o (k) para interferir o eludir las características de seguridad del Servicio o de cualquier website relacionado, otros sitios web o Internet. Nos reservamos el derecho de dar por terminado su uso del Servicio o de cualquier sitio web relacionado por violar cualquiera de los usos prohibidos.
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonBold',
              fontSize: '16px',
              marginBottom: '8px',
            }}
          >
            PEDIDOS Y ENVIOS
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonRegular',
              fontSize: '16px',
              marginBottom: '16px',
            }}
          >
            Los pedidos deben ser realizados con 48 horas de anticipación.<br></br>
            Los pedidos de tortas de personalizadas deben ser realizados con al menos 1 semana de anticipación.<br></br>
            La forma de pago es a través de transferencia bancaria la cual debe realizarse de forma inmediata luego de realizar el pedido y recibir los datos de nuestra cuenta bancaria.<br></br>
            Los pedidos serán procesados una vez sea recibida la transferencia o deposito bancario. No realizamos devoluciones, reembolsos ni cambios en la fecha de entrega una vez la orden haya sido aceptada.<br></br>
            Los envíos tienen un costo adicional, el cual dependiendo de la zona varía en su costo.

          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonBold',
              fontSize: '16px',
              marginBottom: '8px',
            }}
          >
            LEGISLACIÓN APLICABLE y COMPETENCIA
          </Typography>
          <Typography
            align="left"
            color="secondary"
            sx={{
              fontFamily: 'BozonRegular',
              fontSize: '16px',
              marginBottom: '16px',
            }}
          >
            Los presentes términos y condiciones se rigen por las leyes de la República de Chile. Cualquier controversia o conflicto derivado de la utilización del sitio web de ANNETE, sus Términos y Condiciones y las Políticas de Privacidad, su validez, interpretación, alcance o cumplimiento, será sometida a las leyes aplicables de la República de Chile.
          </Typography>
        </section>
      ) : (
        <section className={defaultClassName}>
          <div className={`${defaultClassName}-container`}>
            <Typography
              color="secondary"
              variant="h5"
              sx={{
                marginTop: '24px',
                marginBottom: '32px',
                fontFamily: 'Chequersdemo',
                fontSize: '26px',
              }}
            >
              TERMINOS Y CONDICIONES
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonBold',
                fontSize: '16px',
                marginBottom: '8px',
              }}
            >
              INTRODUCCIÓN
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonRegular',
                fontSize: '16px',
                marginBottom: '16px',
              }}
            >
              Bienvenido al sitio web de ANNETE. Por favor, lea las siguientes reglas básicas que rigen el uso de ANNETE ONLINE (en adelante, las &quot;Reglas&quot;).
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonBold',
                fontSize: '16px',
                marginBottom: '8px',
                marginTop: '16px',
              }}
            >
              USO DEL WEBSITE
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonRegular',
                fontSize: '16px',
                marginBottom: '16px',
              }}
            >
              Mediante el uso del Website el Usuario acepta las Reglas, y declara bajo juramento tener 18 años de edad o más. Si usted es menor de 18 años de edad deberá abstenerse de usar el Website. Los padres, tutores o responsables de los menores de 18 años que utilicen el Website son plena y exclusivamente responsables por el uso del Website por parte de éstos.
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonBold',
                fontSize: '16px',
                marginBottom: '8px',
                marginTop: '16px',
              }}
            >
              DERECHOS DE MARCA, PUBLICIDAD Y PROPIEDAD INTELECTUAL
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonRegular',
                fontSize: '16px',
                marginBottom: '16px',
              }}
            >
              Todos los elementos, incluidas las imágenes, textos, ilustraciones, íconos, logo e isotipos, fotografías, programas, animaciones, cualquier música, melodía, video clip y cualquier otro elemento que forma parte del Website sólo tiene como destino la comercialización de productos por parte de ANNETE y se encuentra prohibida cualquier reproducción, modificación o distribución de los mismos. Todos los comentarios, sugerencias o ideas suministradas por el Usuario serán propiedad de ANNETE.
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonBold',
                fontSize: '16px',
                marginBottom: '8px',
              }}
            >
              MODIFICACIONES AL SERVICIO Y PRECIOS
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonRegular',
                fontSize: '16px',
                marginBottom: '16px',
              }}
            >
              Nos reservamos el derecho de actualizar, cambiar o reemplazar cualquier parte de estos Términos de Servicio mediante la publicación de actualizaciones y/o cambios en nuestro sitio web. Es su responsabilidad revisar esta página periódicamente para conocer los cambios. El uso continuado de nuestro sitio web después de la publicación de cualquier cambio constituye la aceptación de dichos cambios.
              <br></br>
              <br></br>
              Los precios de nuestros productos están sujetos a cambios sin previo aviso.<br></br>
              Nos reservamos el derecho en cualquier momento de modificar o discontinuar el Servicio (o cualquier parte o contenido del mismo) sin previo aviso en cualquier momento.<br></br>
              No seremos responsables ante usted ni ante terceros por ninguna modificación, cambio de precio, suspensión o descontinuación del Servicio.
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonBold',
                fontSize: '16px',
                marginBottom: '8px',
                marginTop: '16px',
              }}
            >
              USOS PROHIBIDOS
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonRegular',
                fontSize: '16px',
                marginBottom: '16px',
              }}
            >
              Se le prohíbe utilizar el sitio o su contenido: (a) para cualquier propósito ilegal; (b) para solicitar a otros que realicen o participen en actos ilícitos; (c) para violar cualquier regulación, reglas, leyes, o ordenanzas locales, internacionales, federales, provinciales o estatales; (d) para infringir o violar nuestros derechos de propiedad intelectual o los derechos de propiedad intelectual de otros; (e) para acosar, abusar, insultar, dañar, difamar, calumniar, menospreciar, intimidar o discriminar por motivos de género, orientación sexual, religión, etnia, raza, edad, origen nacional o discapacidad; (f) para presentar información falsa o engañosa; (g) para cargar o transmitir virus o cualquier otro tipo de código malicioso que será o podría ser utilizado de cualquier manera que afecte la funcionalidad o el funcionamiento del Servicio o de cualquier sitio web relacionado, otros sitios web o Internet; (h) para recopilar o rastrear la información personal de otros; (i) para enviar spam, pescar, pharm, pretext, araña, rastrear o raspar; (j) con cualquier propósito obsceno o inmoral; o (k) para interferir o eludir las características de seguridad del Servicio o de cualquier website relacionado, otros sitios web o Internet. Nos reservamos el derecho de dar por terminado su uso del Servicio o de cualquier sitio web relacionado por violar cualquiera de los usos prohibidos.
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonBold',
                fontSize: '16px',
                marginBottom: '8px',
                marginTop: '16px',
              }}
            >
              PEDIDOS Y ENVIOS
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonRegular',
                fontSize: '16px',
                marginBottom: '16px',
              }}
            >
              Los pedidos de tortas de personalizadas deben ser realizados con al menos 1 semana de anticipación.<br></br>
              La forma de pago es a través de transferencia bancaria la cual debe realizarse de forma inmediata luego de realizar el pedido y recibir los datos de nuestra cuenta bancaria.<br></br>
              Los pedidos serán procesados una vez sea recibida la transferencia o deposito bancario. No realizamos devoluciones, reembolsos ni cambios en la fecha de entrega una vez la orden haya sido aceptada.<br></br>
              Los envíos tienen un costo adicional, el cual dependiendo de la zona varía en su costo.
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonBold',
                fontSize: '16px',
                marginBottom: '8px',
                marginTop: '16px',
              }}
            >
              LEGISLACIÓN APLICABLE y COMPETENCIA
            </Typography>
            <Typography
              align="left"
              color="secondary"
              sx={{
                fontFamily: 'BozonRegular',
                fontSize: '16px',
                marginBottom: '24px',
              }}
            >
              Los presentes términos y condiciones se rigen por las leyes de la República de Chile. Cualquier controversia o conflicto derivado de la utilización del sitio web de ANNETE, sus Términos y Condiciones y las Políticas de Privacidad, su validez, interpretación, alcance o cumplimiento, será sometida a las leyes aplicables de la República de Chile.
            </Typography>
          </div>
        </section>
      )}
    </>
  );
};

TermsAndConditions.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default TermsAndConditions;
