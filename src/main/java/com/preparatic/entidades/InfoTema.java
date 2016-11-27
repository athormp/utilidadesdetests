/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
package com.preparatic.entidades;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class InfoTema {
	private static Logger logger = LogManager.getLogger(InfoTema.class);

	// En caso de que no se disponga conexion a internet (sin BD ni acceso a google) 
	// el programa utilizara esta lista para la generacion de tests. 
	// ATENCION. Puede estar desactualizado y solo usarlo para pruebas puntuales
	public static List<InfoTema> TemasPorDefecto = new ArrayList<InfoTema>();

	static {
		TemasPorDefecto.add(new InfoTema(1, "A1", "La Constituci�n espa�ola de 1978 (I).", "La Constituci�n espa�ola de 1978 (I). Los principios constitucionales. Los derechos fundamentales y sus garant�as. La Corona. Cortes Generales. Congreso de los Diputados y Senado. El Gobierno. Los �rganos constitucionales de control del Gobierno: Tribunal"));
		TemasPorDefecto.add(new InfoTema(2, "A1", "La Constituci�n espa�ola de 1978 (II).", "La constituci�n espa�ola de 1978 (II). El Poder Judicial. La justicia en la Constituci�n. El Consejo General del Poder Judicial. El Ministerio Fiscal. El Tribunal Constitucional. Naturaleza, organizaci�n y atribuciones."));
		TemasPorDefecto.add(new InfoTema(3, "A1", "La Constituci�n espa�ola de 1978 (III).", "La constituci�n espa�ola de 1978 (III). Las Comunidades Aut�nomas: organizaci�n pol�tica y administrativa. La Administraci�n Local: regulaci�n constitucional y entidades que la integran."));
		TemasPorDefecto.add(new InfoTema(4, "A1", "La Constituci�n espa�ola de 1978 (IV).", "La constituci�n espa�ola de 1978 (IV). La administraci�n p�blica: Principios constitucionales. La administraci�n general del Estado. Sus �rganos centrales."));
		TemasPorDefecto.add(new InfoTema(5, "A1", "La Uni�n Europea: antecedentes, evoluci�n y objetivos.", "La Uni�n Europea: antecedentes, evoluci�n y objetivos. Los tratados originarios y modificativos. El derecho comunitario. Fuentes. Relaci�n entre el Derecho comunitario y el ordenamiento jur�dico de los Estados miembros. La participaci�n del Estados miembros."));
		TemasPorDefecto.add(new InfoTema(6, "A1", "Las Instituciones de la Uni�n Europea.", "Las Instituciones de la Uni�n Europea: el Consejo de la Uni�n Europea, la Comisi�n, el Parlamento, el Tribunal de Justicia y el Tribunal de Cuentas. El Consejo Europeo. El Banco Central Europeo."));
	}
	
	// Si cambia el orden o la cantidad de columnas del excel, solo habr� que
	// modificar este atributo.
	private enum Campo {
		NUMERO(0), // A
		BLOQUEID(1), // B
		PESOBLOQUE(2), // C
		PESOTEMA(3), // D
		PESONORMALIZADO(4), // E
		PESOFINAL(5), // F
		TITULOCORTO(6), // G
		TITULOLARGO(7), // H
		
		NUM_COLUMNAS(8); // N�mero total de columnas en el excel.
		
		public int index; // N�mero de columna del excel 
		
		Campo(int indice) {
			index = indice;
		}
	};
	public static final int NUM_COLUMNAS = 	Campo.NUM_COLUMNAS.index;
	
	private int numTema;
	private String bloqueId;
	private String tituloCorto;
	private String tituloLargo;
	
	private float pesoBloque;
	private float pesoTema;
	private float pesoNormalizado;
	private float pesoFinal;
	
	public InfoTema() {
	}

	/**
	 * @param numTema
	 * @param nombreBloque
	 * @param titulo
	 */
	public InfoTema(int numTema, String nombreBloque, String tituloCorto, String tituloLargo) {
		super();
		this.numTema = numTema;
		this.bloqueId = nombreBloque;
		this.tituloCorto = tituloCorto;
		this.tituloLargo = tituloLargo;
	}
	
	public InfoTema(ArrayList<String> celdas) {
		this.setNumTema(Integer.parseInt(celdas.get(Campo.NUMERO.index)));
		this.setBloqueID(celdas.get(Campo.BLOQUEID.index));
		this.setTituloCorto(celdas.get(Campo.TITULOCORTO.index));
		this.setTituloLargo(celdas.get(Campo.TITULOLARGO.index));
	
		this.setPesoBloque(Float.parseFloat(celdas.get(Campo.PESOBLOQUE.index).replace(',', '.')));
		this.setPesoTema(Float.parseFloat(celdas.get(Campo.PESOTEMA.index).replace(',', '.')));
		this.setPesoNormalizado(Float.parseFloat(celdas.get(Campo.PESONORMALIZADO.index).replace(',', '.')));
		this.setPesoFinal(Float.parseFloat(celdas.get(Campo.PESOFINAL.index).replace(',', '.')));

	}
	
	/**
	 * @return the numTema
	 */
	public int getNumTema() {
		return numTema;
	}

	/**
	 * @param numTema
	 *            the numTema to set
	 */
	public void setNumTema(int numTema) {
		this.numTema = numTema;
	}

	/**
	 * @return the BloqueID
	 */
	public String getBloqueID() {
		return bloqueId;
	}

	/**
	 * @param BloqueID
	 *            the BloqueID to set
	 */
	public void setBloqueID(String bloqueId) {
		this.bloqueId = bloqueId;
	}

	/**
	 * @return the titulo
	 */
	public String getTituloCorto() {
		return tituloCorto;
	}

	/**
	 * @param titulo
	 *            the titulo to set
	 */
	public void setTituloCorto(String titulo) {
		this.tituloCorto = titulo;
	}

	public String getTituloLargo() {
		return tituloLargo;
	}

	public void setTituloLargo(String tituloLargo) {
		this.tituloLargo = tituloLargo;
	}
	public float getPesoBloque() {
		return pesoBloque;
	}

	public void setPesoBloque(float pesoBloque) {
		this.pesoBloque = pesoBloque;
	}

	public float getPesoTema() {
		return pesoTema;
	}

	public void setPesoTema(float pesoTema) {
		this.pesoTema = pesoTema;
	}

	public float getPesoNormalizado() {
		return pesoNormalizado;
	}

	public void setPesoNormalizado(float pesoNormalizado) {
		this.pesoNormalizado = pesoNormalizado;
	}

	public float getPesoFinal() {
		return pesoFinal;
	}

	public void setPesoFinal(float pesoFinal) {
		this.pesoFinal = pesoFinal;
	}
	
	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Tema [N�mero=" + numTema + ", Bloque=" + bloqueId + ", T�tulo=" + tituloCorto + "]";
	}

}
